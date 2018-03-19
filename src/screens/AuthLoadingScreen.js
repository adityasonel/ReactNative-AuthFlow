import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, AsyncStorage } from 'react-native';

export default class AuthLoadingScreen extends React.Component {
    
    constructor(props) {
      super(props);
      this._getIsLoggedIn();
    }
  
    _getIsLoggedIn = async () => {
        const loggedIn = await AsyncStorage.getItem('loggedIn');
        this.props.navigation.navigate(loggedIn ? 'App' : 'Auth');
    };
  
    render() {
      return (
        <View style={{
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center'}}>
          
          <ActivityIndicator />
        
        </View>
      );
    }
  }