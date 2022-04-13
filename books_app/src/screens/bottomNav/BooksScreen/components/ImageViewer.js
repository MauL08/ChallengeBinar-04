import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

const ImageViewer = () => {
  const [type, setType] = useState('Internal');
  const [file, setFile] = useState('');

  // External Image
  const [imageIndex, setImageIndex] = useState(0);

  const Images = [
    {
      title: 'Tiger Mom and Baby Tiger',
      url: 'https://images.unsplash.com/photo-1649808570381-c7be56692776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
    {
      title: 'Beast Motorcycle',
      url: 'https://images.unsplash.com/photo-1649786744119-1f87a3c8b194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Sunset on the Bridge',
      url: 'https://images.unsplash.com/photo-1649822223494-eb8b22f8ef06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    },
    {
      title: 'Mountain Hicker',
      url: 'https://images.unsplash.com/photo-1649801974063-a3456c7790db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Highway',
      url: 'https://images.unsplash.com/photo-1649794475212-07a95ae93ec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Viewer</Text>
      <View style={styles.typeControl}>
        <TouchableOpacity
          onPress={() => setType('Internal')}
          style={styles.internalButton}>
          <Text style={styles.buttonText}>Internal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType('External')}
          style={styles.externalButton}>
          <Text style={styles.buttonText}>External</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHelper}>You're viewing {type} Image</Text>
      <View style={styles.contentContainer}>
        {type === 'Internal' ? (
          file ? (
            <View>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => setFile('')}>
                <Text style={styles.pickButtonText}>Choose another Image</Text>
              </TouchableOpacity>
              <Image />
              <Text style={styles.imageTitle}>Image title</Text>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => setFile('Image Available')}>
                <Text style={styles.pickButtonText}>Pick an Image</Text>
              </TouchableOpacity>
            </View>
          )
        ) : (
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: Images[imageIndex].url,
              }}
              style={styles.imageBanner}
            />
            <Text style={styles.imageTitle}>{Images[imageIndex].title}</Text>
            <Text style={styles.imageTitle}>
              ({imageIndex + 1}/{Images.length})
            </Text>
            <View style={styles.buttonControl}>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => {
                  if (imageIndex > 0) {
                    setImageIndex(currState => currState - 1);
                  }
                }}>
                <Text style={styles.pickButtonText}>Prev Movie</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickButton}>
                <Text
                  style={styles.pickButtonText}
                  onPress={() => {
                    if (imageIndex < Images.length - 1) {
                      setImageIndex(currState => currState + 1);
                    }
                  }}>
                  Next Movie
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ImageViewer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),
    backgroundColor: Color.BACKGROUND_COLOR,
    borderRadius: ms(20),
    marginTop: ms(20),
    marginHorizontal: ms(20),
    elevation: ms(6),
  },
  title: {
    color: Color.MAIN_COLOR,
    textAlign: 'left',
    fontSize: ms(18),
    fontWeight: 'bold',
  },
  typeControl: {
    flexDirection: 'row',
    marginVertical: ms(12),
  },
  internalButton: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    marginRight: ms(10),
    borderRadius: ms(4),
  },
  externalButton: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(4),
  },
  buttonText: {
    color: Color.BACKGROUND_COLOR,
    fontSize: ms(12),
    fontWeight: '500',
  },
  textHelper: {
    color: Color.DISABLE_BUTTON_COLOR,
    fontWeight: '500',
    marginBottom: ms(10),
  },
  contentContainer: {
    alignItems: 'center',
  },
  pickButton: {
    backgroundColor: Color.MAIN_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(4),
    marginVertical: ms(15),
  },
  pickButtonText: {
    color: Color.BACKGROUND_COLOR,
    fontWeight: '500',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageBanner: {
    borderRadius: ms(10),
    height: ms(250),
    width: ms(250),
  },
  imageTitle: {
    color: Color.NON_ACTIVE_COLOR,
    textAlign: 'center',
    marginTop: ms(5),
    fontSize: ms(12),
    fontWeight: '500',
  },
  buttonControl: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: ms(300),
  },
});
