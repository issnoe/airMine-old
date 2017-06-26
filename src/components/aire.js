import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { stylesHome } from '../styles/home.js'
import PlaceTime from './placeTime.js'
import Rank from './rank.js'
import ButtonNavigation from './buttonNavigation.js'
export default class AireScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    drawerLabel: 'Aire Mine',
    drawerWidth: 50,
    drawerPosition: 'right',

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
    var styDivider = StyleSheet.create(stylesHome);
    return (
      <Image
        source={require('../img/logindos.png')}
        style={styles.container}>
        <PlaceTime />
        <Rank />
        <ButtonNavigation />
      </Image>

    );
  }
}
