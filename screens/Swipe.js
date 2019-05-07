'use strict'

import React, { Component } from 'react'
import { View } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

class Swipe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 10,
      maxWidth: 370,
      maxHeight: 610,
      y: 10,
      myText: "I'm ready to get swiped!",
      gestureName: 'none',
      backgroundColor: '#fff'
    }
  }

  onSwipeUp(gestureState) {
    this.setState({ myText: 'You swiped up!' })
  }

  onSwipeDown(gestureState) {
    this.setState({ myText: 'You swiped down!' })
  }

  onSwipeLeft(gestureState) {
    this.setState({ myText: 'You swiped left!' })
  }

  onSwipeRight(gestureState) {
    this.setState({ myText: 'You swiped right!' })
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections
    this.setState({ gestureName })
    switch (gestureName) {
      case SWIPE_UP:
        if (!(this.state.y <= 0)) this.setState({ y: this.state.y - 20 })
        this.setState({ backgroundColor: 'red' })
        break

      case SWIPE_DOWN:
        if (this.state.y <= this.state.maxHeight) this.setState({ y: this.state.y + 20 })
        this.setState({ backgroundColor: 'green' })
        break

      case SWIPE_LEFT:
        if (!(this.state.x <= 0)) this.setState({ x: this.state.x - 20 })
        this.setState({ backgroundColor: 'purple' })
        break

      case SWIPE_RIGHT:
        if (this.state.x <= this.state.maxWidth) this.setState({ x: this.state.x + 20 })
        this.setState({ backgroundColor: 'yellow' })
        break
    }
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={state => this.onSwipeUp(state)}
        onSwipeDown={state => this.onSwipeDown(state)}
        onSwipeLeft={state => this.onSwipeLeft(state)}
        onSwipeRight={state => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
      >
        {/*<Text>this y: {this.state.y}</Text>*/}
        <View
          style={{
            marginTop: this.state.y,
            marginLeft: this.state.x,
            height: 50,
            width: 50,
            backgroundColor: 'blue'
          }}
        />
      </GestureRecognizer>
    )
  }
}

export default Swipe
