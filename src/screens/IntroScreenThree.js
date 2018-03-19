import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class IntroScreenThree extends Component{

    _onLoginPress = () => {
        this.props.navigation.navigate('Login');
    }
    
    _onSignupPress = () => {
        this.props.navigation.navigate('Signup');
    }

    render(){
        return(
            <View style = {styles.container} >
                
                <Text style = {styles.title} >Authentication Flow Demo</Text>

                <Text style = {styles.subTitle} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

                <View style = {styles.buttonsContainer} >

                    <TouchableOpacity 
                        onPress = {this._onLoginPress}
                        style = {styles.loginContainer} >
                        <Text style = {styles.buttonText} >LOGIN</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity 
                        onPress = {this._onSignupPress}
                        style = {styles.signupContainer} >
                        <Text style = {styles.buttonText} >SIGNUP</Text>
                    </TouchableOpacity> */}
                
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#55C7D2',
        justifyContent: 'center'
    }, title: {
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
        fontSize: 22,
        paddingTop: 200,
        textAlign: 'center'
    }, subTitle: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        padding: 42,
        paddingTop: 16,
        fontWeight: 'bold'
    }, buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
    }, loginContainer: {
        backgroundColor: 'white',
        flex: 1,
        padding: 12,
        borderRadius: 32,
        marginLeft: 32,
        marginRight: 32,
    }, signupContainer: {
        backgroundColor: 'white',
        flex: 1,
        padding: 12,
        borderRadius: 8,
        marginRight: 32,
        marginLeft: 8
    }, buttonText: {
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    }
});