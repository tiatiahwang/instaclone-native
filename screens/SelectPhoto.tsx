import * as MediaLibrary from 'expo-media-library';
import styled from 'styled-components/native';
import { useEffect, useState } from 'react';

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

const SelectPhoto = () => {
  const [ok, setOk] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const getPermissions = async () => {
    const { accessPrivileges, canAskAgain } =
      await MediaLibrary.getPermissionsAsync();
    if (accessPrivileges === 'none' && canAskAgain) {
      const { accessPrivileges } = await MediaLibrary.requestPermissionsAsync();
      if (accessPrivileges !== 'none') {
        setOk(true);
      }
    } else if (accessPrivileges !== 'none') {
      setOk(true);
    }
  };
  const getPhotos = async () => {
    if (ok) {
      // const albums = await MediaLibrary.getAlbumsAsync();
      // console.log(albums);
      const { assets } = await MediaLibrary.getAssetsAsync();
      setPhotos(assets.map((asset) => asset.uri));
    }
  };
  useEffect(() => {
    getPermissions();
    getPhotos();
  }, [ok]);
  return (
    <Container>
      <Top />
      <Bottom></Bottom>
    </Container>
  );
};

export default SelectPhoto;
