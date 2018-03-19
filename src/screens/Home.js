import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';

import IntroScreenOne from './IntroScreenOne';
import IntroScreenTwo from './IntroScreenTwo'
import IntroScreenThree from './IntroScreenThree';

export default class Home extends Component{

    _renderDotIndicator() {
        return <PagerDotIndicator 
                    pageCount = {3}
                    dotStyle = {styles.dotStyle}
                    selectedDotStyle = {styles.selectedDotStyle}
                     />;
    }

    render(){
        return(
            <IndicatorViewPager
                style={{ flex: 1 }}
                indicator={this._renderDotIndicator()}>
                    
                <View style={{
                    alignItems: 'stretch'}}>
                    <IntroScreenOne />
                </View>
                    
                <View style={{
                    alignItems: 'stretch'}}>
                    <IntroScreenTwo />
                </View>
                
                <View style={{
                    alignItems: 'stretch'}}>
                    <IntroScreenThree navigation = {this.props.navigation} />
                </View>

            </IndicatorViewPager>
        );
    }
}

const styles = StyleSheet.create({
    dotStyle: {
       backgroundColor: 'darkgrey',
       width: 8,
       height: 8,
       borderRadius: 8,
   }, selectedDotStyle: {
       backgroundColor: 'white',
       width: 9,
       height: 9,
       borderRadius: 9,
   }, 
});