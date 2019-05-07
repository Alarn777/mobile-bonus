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
import Swipe from './screens/Swipe'
import Press from './screens/Press'
import Drag from './screens/Drag'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Gyroscope,
    Accelerometer,
    GeoLocation,
    Gestures,
    Swipe,
    Press,
    Drag
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
