import { Text, TouchableOpacity, View } from 'react-native';

import { SearchScreenProps } from '../navTypes';

const Search = ({ navigation }: SearchScreenProps) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Photo')}>
        <Text style={{ color: 'white' }}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;