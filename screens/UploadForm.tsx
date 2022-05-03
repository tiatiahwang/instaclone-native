import { Text } from 'react-native';
import { UploadFormScreenProps } from '../navTypes';

const UploadForm = ({ route }: UploadFormScreenProps) => {
  console.log(route);
  return <Text>업로드</Text>;
};

export default UploadForm;
