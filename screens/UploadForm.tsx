import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { UploadFormScreenProps } from '../navTypes';
import styled from 'styled-components/native';
import { colors } from '../colors';
import DismissKeyboard from '../components/DismissKeyboard';
import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { ReactNativeFile } from 'apollo-upload-client';
import { useUploadPhotoMutation } from '../graphql/generated';

const Container = styled.View`
  flex: 1;
  background-color: black;
  padding: 0 50px;
`;

const Photo = styled.Image`
  height: 300px;
`;

const CaptionContainer = styled.View`
  margin-top: 30px;
`;

const Caption = styled.TextInput`
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 100px;
`;

const HeaderRightText = styled.Text`
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 600;
  margin-right: 7px;
`;

interface IForm {
  caption: string;
}

const UploadForm = ({ route, navigation }: UploadFormScreenProps) => {
  const [uploadPhotoMutation, { loading }] = useUploadPhotoMutation();
  const { control, handleSubmit } = useForm<IForm>();
  const onValid = ({ caption }: IForm) => {
    const file = new ReactNativeFile({
      uri: route.params.file,
      name: '1.jpg',
      type: 'image/jpeg',
    });
    uploadPhotoMutation({
      variables: {
        file,
        caption,
      },
    });
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        loading ? (
          <ActivityIndicator
            size="small"
            color="white"
            style={{ marginRight: 10 }}
          />
        ) : (
          <TouchableOpacity onPress={handleSubmit(onValid)}>
            <HeaderRightText>다음</HeaderRightText>
          </TouchableOpacity>
        ),
      ...(loading && { headerLeft: () => null }),
    });
  }, [navigation, loading, handleSubmit, onValid]);
  return (
    <DismissKeyboard>
      <Container>
        <Photo resizeMode="contain" source={{ uri: route.params.file }} />
        <CaptionContainer>
          <Controller
            control={control}
            name="caption"
            render={({ field: { onChange, value } }) => (
              <Caption
                placeholder="문구를 적어주세요"
                placeholderTextColor="rgba(0,0,0,0.5)"
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(onValid)}
                returnKeyType="done"
              />
            )}
          />
        </CaptionContainer>
      </Container>
    </DismissKeyboard>
  );
};

export default UploadForm;
