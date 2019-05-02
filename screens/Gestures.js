import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Gestures extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Gestures</Text>
            </View>
        );
    }
}
