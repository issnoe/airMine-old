import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { stylesHome } from '../styles/home.js'
import PlaceTime  from './placeTime.js'
import Rank  from './rank.js'
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
        <PlaceTime/>
        <Rank/>



        
        <View style={styles.conteinerButtons}>
          <Image style={{
            alignSelf: 'center',
            height: 50,
            width: 50,

            marginTop: 35,
            borderWidth: 1,
            borderRadius: 75
          }} source={require('../img/ecology.png')} />
          <Image style={{
            alignSelf: 'center',
            height: 90,
            width: 90,
            marginTop: 35,
            borderWidth: 1,
            borderRadius: 75
          }} source={require('../img/ecology.png')} />
        </View>

        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </Image>

    );
  }
}
