import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AlertIOS, AsyncStorage } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class LoginScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    _setIsLoggedIn = async () => {
        await AsyncStorage.setItem('loggedIn', 'loggedIn');
        await AsyncStorage.setItem('email', this.state.email);
        await AsyncStorage.setItem('password', this.state.password);
    }

    _handleEmail = (text) => {
        this.setState({ email: text })
     }

     _handlePassword = (text) => {
        this.setState({ password: text })
     }

    _onLoginPress = (email, password) => {

        if (email.length == 0){
            AlertIOS.alert('Enter email first!!!');
            return;
        }

        if (password.length < 6){
            AlertIOS.alert('Password too short, enter minimum 6 characters!');
            return;
        }

        try {
            this._setIsLoggedIn();
            this.props.navigation.navigate('AuthLoading');
        } catch (error){
            console.log(error);
        }
    }

    _onPressGoback = () => {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style = {styles.container} >

                <TouchableOpacity onPress = {this._onPressGoback} >
                <View 
                    style = {{
                        flexDirection: 'row', 
                        marginTop: 32, 
                        alignItems: 'center', 
                        marginLeft: 28}} >

                        <Ionicons 
                            name={'ios-arrow-back'} 
                            size={28} 
                            color='white' />
                    <Text style = {{
                        fontSize: 16, 
                        color: 'white', 
                        fontWeight: 'bold', 
                        marginBottom: 3,
                        marginLeft: 4}} >Back</Text>
                </View>
                </TouchableOpacity>

                    <Text style = {styles.title} >Login</Text>

                        <TextInput
                            autoCorrect = {false}
                            autoCapitalize = 'none'
                            blurOnSubmit = {true}
                            onChangeText = {this._handleEmail}
                            style = {styles.inputs}
                            keyboardType = 'email-address'
                            placeholder = 'Username' />

                        <TextInput
                            blurOnSubmit = {true}
                            onChangeText = {this._handlePassword}
                            style = {styles.inputs}
                            secureTextEntry = {true}
                            placeholder = 'Password' />

                        <TouchableOpacity 
                                onPress = {() => this._onLoginPress(this.state.email, this.state.password)}
                                style = {styles.loginContainer} >
                                <Text style = {styles.buttonText} >LOGIN</Text>
                        </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f49651'
    }, subContainer: {
        alignSelf: 'stretch'
    }, inputs: {
        alignSelf: 'stretch',
        padding: 12,
        paddingLeft: 22,
        paddingRight: 22,
        marginRight: 32,
        marginLeft: 32,
        backgroundColor: 'white',
        borderRadius: 22,
        marginBottom: 8,
    }, loginContainer: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        padding: 13,
        borderRadius: 22,
        marginRight: 32,
        marginLeft: 32
    }, buttonText: {
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    }, title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 32,
        marginTop: 140,
        marginBottom: 22
    }
});