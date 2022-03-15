import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import Color from '../../config/utils/color';
import Data from '../../models/batman';
import {BackIcon, LoveIcon, ShareIcon} from '../../assets';

const BackdropNavigation = () => {
  const navigation = useNavigation();
  const [loveCheck, setLoveCheck] = useState(false);

  return (
    <ImageBackground
      source={{uri: Data.backdrop_path}}
      style={styles.container}>
      <View style={styles.topBarContainer}>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => navigation.goBack()}>
          <Image source={BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.interactionContainer}>
          <TouchableOpacity
            style={styles.loveIconContainer}
            onPress={() => setLoveCheck(!loveCheck)}>
            <Image source={LoveIcon} style={styles.loveIcon(loveCheck)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareIconContainer}>
            <Image source={ShareIcon} style={styles.shareIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default BackdropNavigation;

const styles = StyleSheet.create({
  container: {
    height: 220,
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 10,
  },
  backIcon: {
    height: 28,
    width: 28,
    tintColor: Color.ACTIVE_BUTTON_COLOR,
  },
  interactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  loveIconContainer: {
    padding: 8,
    backgroundColor: Color.ACTIVE_BUTTON_COLOR,
    marginRight: 8,
    borderRadius: 20,
  },
  loveIcon: val => ({
    tintColor: val ? 'red' : Color.DISABLE_BUTTON_COLOR,
  }),
  shareIconContainer: {
    padding: 8,
    backgroundColor: Color.ACTIVE_BUTTON_COLOR,
    borderRadius: 20,
  },
  shareIcon: {
    tintColor: Color.DISABLE_BUTTON_COLOR,
  },
});
