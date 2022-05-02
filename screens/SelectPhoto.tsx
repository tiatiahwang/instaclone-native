import * as MediaLibrary from 'expo-media-library';
import styled from 'styled-components/native';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../colors';
import { SelectPhotoNavScreenProps } from '../navTypes';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Top = styled.View`
  flex: 1;
  background-color: pink;
`;

const Bottom = styled.View`
  flex: 1;
  background-color: palevioletred;
`;

const ImageContainer = styled.TouchableOpacity``;

const IconContainer = styled.View`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const HeaderRightText = styled.Text`
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 600;
`;

const SelectPhoto = ({ navigation }: SelectPhotoNavScreenProps) => {
  const numColumns = 4;
  const { width } = useWindowDimensions();
  const [ok, setOk] = useState(false);
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const [chosenPhoto, setChosenPhoto] = useState('');
  const getPermissions = async () => {
    const { accessPrivileges, canAskAgain } =
      await MediaLibrary.getPermissionsAsync();
    if (accessPrivileges === 'none' && canAskAgain) {
      const { accessPrivileges } = await MediaLibrary.requestPermissionsAsync();
      if (accessPrivileges !== 'none') {
        setOk(true);
        getPhotos();
      }
    } else if (accessPrivileges !== 'none') {
      setOk(true);
      getPhotos();
    }
  };
  const getPhotos = async () => {
    if (ok) {
      const { assets } = await MediaLibrary.getAssetsAsync();
      setChosenPhoto(assets[0]?.uri);
      setPhotos(assets);
    }
  };
  const HeaderRight = () => (
    <TouchableOpacity>
      <HeaderRightText>다음</HeaderRightText>
    </TouchableOpacity>
  );
  useEffect(() => {
    getPermissions();
  }, [ok]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRight,
    });
  });
  return (
    <Container>
      <Top>
        {chosenPhoto !== '' ? (
          <Image
            source={{ uri: chosenPhoto }}
            style={{ width, height: '100%' }}
          />
        ) : null}
      </Top>
      <Bottom>
        <FlatList
          data={photos}
          numColumns={numColumns}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ImageContainer onPress={() => setChosenPhoto(item.uri)}>
              <Image
                source={{ uri: item.uri }}
                style={{
                  width: width / numColumns,
                  height: 100,
                  marginBottom: 0.5,
                  ...(index % numColumns !== 3 && { marginRight: 0.5 }),
                }}
              />
              <IconContainer>
                <Ionicons
                  name="checkbox-outline"
                  size={18}
                  color={item.uri === chosenPhoto ? colors.blue : 'white'}
                />
              </IconContainer>
            </ImageContainer>
          )}
        />
      </Bottom>
    </Container>
  );
};

export default SelectPhoto;
