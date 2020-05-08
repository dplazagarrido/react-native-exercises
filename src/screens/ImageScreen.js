import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetail 
        title="Forest" 
        imageSource={require('../../assets/forest.jpg')}
        imageScore = {10}
      />
      <ImageDetail 
        title="Beach" 
        imageSource={require('../../assets/beach.jpg')}
        imageScore= {4}
      />
      <ImageDetail 
        title="Mountain" 
        imageSource={require('../../assets/mountain.jpg')}
        imageScore= {10}
      />
    </View>
  )
};

const Styles = StyleSheet.create({});

export default ImageScreen;