import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {PaperProvider,MD3LightTheme} from 'react-native-paper';
import PaperExamples from './components/Paper';
import Test from './components/test';


const theme={
  ...MD3LightTheme,
  colors:{
    ...MD3LightTheme.colors,
    primary:'blue',
  },
};
export default function App() {
  return (
   <View>
    <Text/>
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
