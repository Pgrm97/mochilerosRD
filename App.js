import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Mochileros RD!</Text>
      <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/tutor-icon-set/512/Backpack_icon-512.png'}}
       style={{width: 200, height: 200}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
