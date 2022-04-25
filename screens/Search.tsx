import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import DismissKeyboard from '../components/DismissKeyboard';
import { SearchScreenProps } from '../navTypes';

const Input = styled.TextInput`
  background-color: white;
  padding: 0;
  margin: 0;
`;

interface IForm {
  keyword: string;
}

const Search = ({ navigation }: SearchScreenProps) => {
  const { control, handleSubmit } = useForm<IForm>();
  const onValid: SubmitHandler<IForm> = (data) => console.log(data);

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
  }, [navigation, control, handleSubmit]);
  return (
    <DismissKeyboard>
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Search</Text>
      </View>
    </DismissKeyboard>
  );
};

export default Search;
