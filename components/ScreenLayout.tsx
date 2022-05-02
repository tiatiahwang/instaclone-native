import { ReactNode } from 'react';
import { ActivityIndicator, View } from 'react-native';

interface Props {
  loading: boolean;
  children: ReactNode;
}

const ScreenLayout = ({ loading, children }: Props) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {loading ? <ActivityIndicator color="white" /> : children}
    </View>
  );
};

export default ScreenLayout;
