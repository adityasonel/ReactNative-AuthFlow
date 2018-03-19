import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, AlertIOS, AsyncStorage, ActionSheetIOS, SegmentedControlIOS } from 'react-native';

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
                        name={'ios-power'} 
                        size={22} 
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

        // AlertIOS.alert(
        //     'Confirm!', 
        //     'Are you sure want to logout ?',
        //     [
        //         {
        //             text: 'Cancel',
        //             onPress: () => console.log('Cancel'),
        //             style: 'cancel'
        //         }, {
        //             text: 'Logout',
        //             onPress: () => this._setIsLoggedIn(),
        //         }
        //     ]);

        ActionSheetIOS.showActionSheetWithOptions({
            options: ['Logout', 'Cancel'],
            destructiveButtonIndex: 0,
            cancelButtonIndex: 1,
          },
          (buttonIndex) => {
            if (buttonIndex === 0) { 
                this._setIsLoggedIn();
             } else if (buttonIndex === 1) {
                 console.log('cancelled!');
             }
          });
    }
  
    componentDidMount () {
        this.props.navigation.setParams({handleLogoutHeader: () => this.onPressLogoutHeader()});
    }

    render(){
        return(
            <View style = { styles.container } >
                <Text>Home Screen!</Text>
                <Text>{this.state.email} logged in succesfully!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});