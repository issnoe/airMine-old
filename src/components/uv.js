import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import PlaceTime from './placeTime.js'
import Rank from './rankUV.js'
import ButtonNavigation from './buttonNavigationUV.js'
export default class UvScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigation.navigate('DrawerClose'); 
  }
  static navigationOptions = {
    drawerLabel: 'Radiacìon UV2',
    drawerWidth: 50,
    drawerPosition: 'right',
    tabBarVisible: true
  };
  
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
      },
      conteinerButtons: {
        flex: 2,
        flexDirection: 'column',
      }
    });
    const { params } = this.props.navigation.state;
    
    return (
      <Image
        source={require('../img/sunmain.png')}
        style={styles.container}>
        <PlaceTime />
        <Rank {...this.props}/>
        <ButtonNavigation {...this.props}/>
      </Image>

    );
  }
}
