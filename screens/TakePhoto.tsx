import { useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Actions = styled.View`
  flex: 0.35;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TakePhotoButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  opacity: 0.5;
`;

const TakePhoto = () => {
  const [ok, setOk] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const getPermissions = async () => {
    const { granted } = await Camera.getCameraPermissionsAsync();
    setOk(granted);
  };
  useEffect(() => {
    getPermissions();
  }, []);
  return (
    <Container>
      <Camera type={cameraType} style={{ flex: 1 }} />
      <Actions>
        <TakePhotoButton></TakePhotoButton>
        <TouchableOpacity></TouchableOpacity>
      </Actions>
    </Container>
  );
};

export default TakePhoto;
