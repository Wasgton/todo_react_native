import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar } from 'react-native';
import styles from "./styles";
import { NavigationContainer, DarkTheme  } from '@react-navigation/native';
import Routes from './routes'

export default function App() {

    const theme = {
        dark: false,
        colors: {
            primary: 'rgba(0, 0, 0,0)',
            background: 'rgb(101, 72, 163)',
            card: 'rgba(0, 0, 0,0)',
            text: 'rgba(1, 1, 1,0)',
            border: 'rgba(0, 0, 0,0)',
            notification: 'rgba(0, 0, 0,1)',
        },
    }

  return (
      <NavigationContainer theme={theme}>
        <StatusBar backgroundColor="black" StatusBarStyle="dark-content"/>
        <View style={styles.mainContainer}>
            <Routes/>
        </View>
      </NavigationContainer>
  );
}
