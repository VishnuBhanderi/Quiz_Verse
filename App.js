import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyStack from './Navigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; 

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
