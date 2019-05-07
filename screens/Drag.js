
import React, {Component} from 'react';

import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image, // we want to use an image
    PanResponder, // we want to bring in the PanResponder system
    Animated // we wil be using animated value
} from 'react-native';



export default class Gestures extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pan: new Animated.ValueXY()
        };
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            // Initially, set the value of x and y to 0 (the center of the screen)
            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setValue({x: 0, y: 0});
            },

            // When we drag/pan the object, set the delate to the states pan position
            onPanResponderMove: Animated.event([
                null, {dx: this.state.pan.x, dy: this.state.pan.y},
            ]),

            onPanResponderRelease: (e, {vx, vy}) => {
            }
        });
    }



    render() {
        // Destructure the value of pan from the state
        let { pan } = this.state;

        // Calculate the x and y transform from the pan value
        let [translateX, translateY] = [pan.x, pan.y];

        // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
        let imageStyle = {transform: [{translateX}, {translateY}]};

        return (
            <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
                    <Image source={require('../assets/images.jpeg')} />
                </Animated.View>
            </View>
        );
    }


    // render() {
    //     return (
    //         <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
    //             <Animated.View {...this._panResponder.panHandlers}>
    //                 <Image source={require('../assets/images.jpeg')} />
    //             </Animated.View>
    //         </View>
    //     );
    // }
}

