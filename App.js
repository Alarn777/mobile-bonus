/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './screens/MainScreen'
import Accelerometer from './screens/Accelerometer'
import Gyroscope from './screens/Gyroscope'
import GeoLocation from './screens/GeoLocation'
import Gestures from './screens/Gestures'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Gyroscope: Gyroscope,
    Accelerometer: Accelerometer,
    GeoLocation: GeoLocation,
    Gestures : Gestures,
  },
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
