import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, AlertIOS, AsyncStorage, ActionSheetIOS, SegmentedControlIOS } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component{

    constructor(props){
        super(props);
    }
  
    render(){
        return(
            <View style = { styles.container } >
                <Text>Profile Screen!</Text>
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