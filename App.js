/** default React Dependency for React.Components */
import React, { Component } from 'react';

/** Using react-navigation library for navigate through various screens in project.
 * StackNavigator: - create stacks of screen defined from which we can navigate.
 * SwitchNavigator: - switch between Auth & Other Screen of the app.
 */
import { StackNavigator, SwitchNavigator } from 'react-navigation';

/** default screens of application */
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import Home from './src/screens/Home';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import Main from './src/screens/Main';

/** AppStack: - this stack contains screens that will visible after user logged in. */
const AppStack = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Main'
    }
  }
});

/** AuthStack: - this stack contains screens that will be we are going to authenticate users. */
const AuthStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }, Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }, Signup: {
    screen: SignupScreen,
    navigationOptions: {
      header: null
    }
  }
});

/** SwitchNavigator: - this stack helps us in switching between main screens of the app,
 * and the auth screens of the application.
 */
export default SwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack
}, {
  initialRouteName: 'AuthLoading'
});