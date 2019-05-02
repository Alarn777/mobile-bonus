/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/MainScreen';
import Gyroscope from './screens/Gyroscope'



const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Gyroscope: Gyroscope
    },
    {
      initialRouteName: "Home"
    }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}