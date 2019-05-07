import {Platform, StyleSheet, Text, View,Button,Alert,TouchableOpacity} from "react-native";
import React, {Component} from 'react';


type Props = {};
export default class MainScreen extends Component<Props> {

    handlerLongClick = () => {
        Alert.alert('Good Long Press');
    };
    handlerClick = () => {
        Alert.alert('Press for longer');
    };


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onLongPress={this.handlerLongClick}
                    onPress={this.handlerClick}
                    //Here is the trick
                    activeOpacity={0.6}
                    style={styles.button}>
                    <Text style={{  justifyContent: 'center'}}> LONG PRESS THE BUTTON </Text>
                </TouchableOpacity>
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
    button: {
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
});