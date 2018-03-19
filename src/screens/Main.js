import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, AlertIOS, AsyncStorage } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Main extends Component{

    constructor(props){
        super(props);

        this.state = ({
            email: ''
        })
        this._getEmailAddress();
    }

    _getEmailAddress = async () => {
        const emailAddress = await AsyncStorage.getItem('email');
        this.setState({
            email: emailAddress
        });

        console.log(this.state.email);
    };

    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return{
            headerRight: (
                <TouchableOpacity
                    onPress = {() => params.handleLogoutHeader && params.handleLogoutHeader()}>
                    <Ionicons 
                        style = {{marginRight: 16}}
                        name={'ios-log-out'} 
                        size={24} 
                        color='#0076FF' />
                </TouchableOpacity>
            )
        }
    }

    _setIsLoggedIn = async () => {
        await AsyncStorage.setItem('loggedIn', '');
        await AsyncStorage.setItem('email', '');
        await AsyncStorage.setItem('password', '');

        this.props.navigation.navigate('AuthLoading');
    }

    onPressLogoutHeader = () => {

        AlertIOS.alert(
            'Confirm!', 
            'Are you sure want to logout ?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel'),
                    style: 'cancel'
                }, {
                    text: 'Logout',
                    onPress: () => this._setIsLoggedIn(),
                }
            ]);
    }
  
    componentDidMount () {
        this.props.navigation.setParams({handleLogoutHeader: () => this.onPressLogoutHeader()});
    }

    render(){
        return(
            <View style = { styles.container } >
                <Text>Main Screen!</Text>
                <Text>{this.state.email} logged in succesfully!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});