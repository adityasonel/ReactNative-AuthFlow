import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AlertIOS, TouchableOpacity } from 'react-native';

export default class IntroScreenOne extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style = {styles.container} >
                
                <Text style = {styles.title} >Simple ReactNative App</Text>

                <Text style = {styles.subTitle} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dc2f48',
        justifyContent: 'center'
    }, title: {
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
        fontSize: 22,
        paddingTop: 120,
    }, subTitle: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        padding: 42,
        paddingTop: 16,
        fontWeight: 'bold'
    }
});