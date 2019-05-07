import {Platform, StyleSheet, Text, View,Button} from "react-native";
import React, {Component} from 'react';

type Props = {};
export default class MainScreen extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Gestures!</Text>
                <Button style={styles.button} title='Swipe' onPress={()=>this.props.navigation.navigate('Swipe')}/>
                <Button style={styles.button} title='Press' onPress={()=>this.props.navigation.navigate('Press')}/>
                <Button style={styles.button} title='Drag' onPress={()=>this.props.navigation.navigate('Drag')}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});