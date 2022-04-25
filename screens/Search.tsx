import { useCallback, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import DismissKeyboard from '../components/DismissKeyboard';
import { useSearchPhotosLazyQuery } from '../graphql/generated';
import { SearchScreenProps } from '../navTypes';

const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 1);
  color: black;
  width: ${({ width }) => width / 1.5}px;
  padding: 5px 10px;
  border-radius: 7px;
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
  const numColumns = 3;
  const { width } = useWindowDimensions();
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
              style={{ width: width / 1.2 }}
              autoCorrect={false}
              value={value}
              placeholder="Search Photos"
              placeholderTextColor="grey"
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
  }, [navigation, control, handleSubmit, onValid, width]);

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
        {data?.searchPhotos?.length !== undefined ? (
          data?.searchPhotos?.length === 0 ? (
            <MessageContainer>
              <MessageText>No result.</MessageText>
            </MessageContainer>
          ) : (
            <FlatList
              numColumns={numColumns}
              data={data?.searchPhotos}
              keyExtractor={(item) => item?.id + ''}
              renderItem={({ item: photo, index }) => (
                <TouchableOpacity>
                  <Image
                    source={{ uri: photo?.file }}
                    style={{
                      width: width / numColumns,
                      height: 100,
                      marginBottom: 3,
                      ...(index % 3 !== 2 && { marginRight: 3 }),
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          )
        ) : null}
      </View>
    </DismissKeyboard>
  );
};

export default Search;
