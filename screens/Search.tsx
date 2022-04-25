import { useCallback, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ActivityIndicator, Text, View } from 'react-native';
import styled from 'styled-components/native';
import DismissKeyboard from '../components/DismissKeyboard';
import { useSearchPhotosLazyQuery } from '../graphql/generated';
import { SearchScreenProps } from '../navTypes';

const Input = styled.TextInput`
  background-color: white;
  padding: 0;
  margin: 0;
`;

const MessageContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const MessageText = styled.Text`
  margin-top: 15px;
  color: white;
  font-weight: 600;
`;

interface IForm {
  keyword: string;
}

const Search = ({ navigation }: SearchScreenProps) => {
  const [searchQuery, { data, loading, called }] = useSearchPhotosLazyQuery();
  const { control, handleSubmit } = useForm<IForm>();
  const onValid: SubmitHandler<IForm> = useCallback(
    ({ keyword }) => {
      searchQuery({ variables: { keyword } });
    },
    [searchQuery],
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Controller
          control={control}
          rules={{ required: true }}
          name="keyword"
          render={({ field: { onChange, value } }) => (
            <Input
              autoCorrect={false}
              value={value}
              placeholder="Search Photos"
              placeholderTextColor="black"
              autoCapitalize="none"
              returnKeyType="search"
              returnKeyLabel="search"
              onSubmitEditing={handleSubmit(onValid)}
              onChangeText={onChange}
            />
          )}
        />
      ),
    });
  }, [navigation, control, handleSubmit, onValid]);
  console.log(data);
  return (
    <DismissKeyboard>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}
      >
        {loading && (
          <MessageContainer>
            <ActivityIndicator color="white" />
            <MessageText>Searching...</MessageText>
          </MessageContainer>
        )}
        {!called && (
          <MessageContainer>
            <MessageText>Search by keyword</MessageText>
          </MessageContainer>
        )}
        {data && !data.searchPhotos?.length && (
          <MessageContainer>
            <MessageText>No result.</MessageText>
          </MessageContainer>
        )}
      </View>
    </DismissKeyboard>
  );
};

export default Search;
