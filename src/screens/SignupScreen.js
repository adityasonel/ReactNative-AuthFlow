import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AlertIOS } from 'react-native';

export default class SignupScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
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

        AlertIOS.alert('Welcome, '+email);
    }

    _onPressGoback = () => {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style = {styles.container} >

                    <Text style = {styles.title} >Signup</Text>

                        <TextInput
                            autoCapitalize = 'none'
                            blurOnSubmit = {true}
                            onChangeText = {this._handleEmail}
                            style = {styles.inputs}
                            keyboardType = 'email-address'
                            placeholder = 'Email' />

                        <TextInput
                            blurOnSubmit = {true}
                            onChangeText = {this._handlePassword}
                            style = {styles.inputs}
                            secureTextEntry = {true}
                            placeholder = 'Password' />

                        <TouchableOpacity 
                                onPress = {() => this._onLoginPress(this.state.email, this.state.password)}
                                style = {styles.loginContainer} >
                                <Text style = {styles.buttonText} >SIGNUP</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style = {styles.goBack}
                            onPress = {this._onPressGoback} >
                            <Text style = {{color: 'white'}} >Go Back</Text>
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
        marginTop: 160,
        marginBottom: 22
    }, goBack: {
        alignSelf: 'center',
        padding: 16
    }
});