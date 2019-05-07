import { StyleSheet, Text, View, Button } from 'react-native'
import React, { Component } from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

type Props = {}
export default class MainScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Native!</Text>
        <Button
          style={styles.button}
          title="Gyroscope"
          onPress={() => this.props.navigation.navigate('Gyroscope')}
        />
        <Button
          style={styles.button}
          title="Accelerometer"
          onPress={() => this.props.navigation.navigate('Accelerometer')}
        />
        <Button
          style={styles.button}
          title="GeoLocation"
          onPress={() => this.props.navigation.navigate('GeoLocation')}
        />
        <Button
          style={styles.button}
          title="Gestures"
          onPress={() => this.props.navigation.navigate('Gestures')}
        />
      </View>
    )
  }
}
