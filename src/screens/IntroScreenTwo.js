import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class IntroScreenTwo extends Component{
    render(){
        return(
            <View style = {styles.container} >
                
                <Text style = {styles.title} >For Developers</Text>

                <Text style = {styles.subTitle} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6C6AA3',
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