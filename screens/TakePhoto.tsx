import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { TakePhotoNavScreenProps } from '../navTypes';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Actions = styled.View`
  flex: 0.35;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;
`;

const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TakePhotoButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  opacity: 0.5;
`;

const SliderContainer = styled.View``;

const ActionsContainer = styled.View`
  flex-direction: row;
`;

const CloseButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

const TakePhoto = ({ navigation }: TakePhotoNavScreenProps) => {
  const camera = useRef<Camera>(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [ok, setOk] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [zoom, setZoom] = useState(0);
  const getPermissions = async () => {
    const { granted } = await Camera.getCameraPermissionsAsync();
    setOk(granted);
  };
  useEffect(() => {
    getPermissions();
  }, []);
  const onCameraSwitch = () => {
    if (cameraType === Camera.Constants.Type.front) {
      setCameraType(Camera.Constants.Type.back);
    } else {
      setCameraType(Camera.Constants.Type.front);
    }
  };
  const onFlashChange = () => {
    if (flashMode === Camera.Constants.FlashMode.off) {
      setFlashMode(Camera.Constants.FlashMode.on);
    } else if (flashMode === Camera.Constants.FlashMode.on) {
      setFlashMode(Camera.Constants.FlashMode.auto);
    } else if (flashMode === Camera.Constants.FlashMode.auto) {
      setFlashMode(Camera.Constants.FlashMode.off);
    }
  };
  const onZoomValueChange = (zoom: number) => {
    setZoom(zoom);
  };
  const onCameraReady = () => {
    setCameraReady(true);
  };
  const takePhoto = async () => {
    if (camera.current && cameraReady) {
      const photo = await camera.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log(photo);
    }
  };
  return (
    <Container>
      <Camera
        type={cameraType}
        style={{ flex: 1 }}
        zoom={zoom}
        ref={camera}
        onCameraReady={onCameraReady}
      >
        <CloseButton onPress={() => navigation.navigate('TabsNav')}>
          <Ionicons name="close" color="white" size={30} />
        </CloseButton>
      </Camera>
      <Actions>
        <SliderContainer>
          <Slider
            style={{ width: 200, height: 20 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="rgba(255,255,255,0.5)"
            onValueChange={onZoomValueChange}
          />
        </SliderContainer>
        <ButtonsContainer>
          <TakePhotoButton onPress={takePhoto} />
          <ActionsContainer>
            <TouchableOpacity onPress={onFlashChange}>
              <Ionicons
                size={30}
                color="white"
                name={
                  flashMode === Camera.Constants.FlashMode.off
                    ? 'flash-off'
                    : flashMode === Camera.Constants.FlashMode.on
                    ? 'flash'
                    : 'eye'
                }
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onCameraSwitch}>
              <Ionicons size={30} color="white" name="camera-reverse" />
            </TouchableOpacity>
          </ActionsContainer>
        </ButtonsContainer>
      </Actions>
    </Container>
  );
};

export default TakePhoto;
