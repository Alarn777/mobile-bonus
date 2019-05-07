import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { accelerometer } from 'react-native-sensors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 50
  },
  headline: {
    fontSize: 30,
    textAlign: 'left',
    margin: 10
  },
  valueContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  valueValue: {
    width: 200,
    fontSize: 20
  },
  valueName: {
    width: 50,
    fontSize: 20,
    fontWeight: 'bold'
  }
})

const Value = ({ name, value }) => (
  <View style={styles.valueContainer}>
    <Text style={styles.valueName}>{name}:</Text>
    <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
  </View>
)

export default class Accelerometer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
      z: 0
    }
  }

  componentWillMount() {
    const subscription = accelerometer.subscribe(({ x, y, z }) => this.setState({ x, y, z }))
    this.setState({ subscription })
  }

  componentWillUnmount() {
    this.state.subscription.unsubscribe()
    this.setState({ subscription: null })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Accelerometer values</Text>
        <Value name="x" value={this.state.x} />
        <Value name="y" value={this.state.y} />
        <Value name="z" value={this.state.z} />
      </View>
    )
  }
}
