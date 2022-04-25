import { useEffect } from 'react';
import { Text, View } from 'react-native';
import useMe from '../hooks/useMe';
import { MeScreenProps } from '../navTypes';

const Me = ({ navigation }: MeScreenProps) => {
  const { data } = useMe();
  useEffect(() => {
    navigation.setOptions({ title: data?.me?.username });
  }, [data]);
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white' }}>Me</Text>
    </View>
  );
};

export default Me;
