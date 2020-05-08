import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Diego';
  return (
    <View>
      <Text style={ styles.textStyle }>Getting started with Reac Native!</Text>
      <Text style={ styles.textNameStyle }>My name is { name }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  textNameStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen