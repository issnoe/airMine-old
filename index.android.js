/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AppRegistry, ActivityIndicator, ScrollView, ListView, Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
//import TestComp from './assets/components/test'
import UsuarioScreen from './src/components/usuario.js'
import Inicio from './src/components/app.js'
import AireScreen from './src/components/aire.js'
import UvScreen from './src/components/uv.js'
import SummerScreen from './src/components/summer.js'
import RankingScreen from './src/components/rankingList.js'

import CreditosScreen from './src/components/creditos.js'
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    var options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 3000 }
    navigator.geolocation.getCurrentPosition(function (pos) {
      this.setState(pos);
    }.bind(this), function (error) {
      debugger;
      //Actualizar localstorage
    });
  }
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <Inicio s={this.state} />

    );
  }
}

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'AirMine',

  };
  render() {
    const styles = StyleSheet.create({
      backgroundImage: {
        flex: 2,
        width: undefined,
        height: 100,
        resizeMode: "cover",

      },
      imagenRadio: {
        alignSelf: 'center',
        height: 150,
        width: 150,
        borderWidth: 1,
        borderRadius: 75
      },
      mainView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
      }
    });
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 2
      }}>
        <View style={{
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'center',


          alignItems: 'center',
        }}>
          <Text style={{ alignSelf: 'center' }}>Calidad del aire</Text>
          <TouchableOpacity onPress={() => navigate('Chat', { user: 'Lucy' })} >
            <View style={{ marginBottom: 30, justifyContent: 'center' }} >

              <Image style={{
                alignSelf: 'center',
                height: 120,
                width: 120,
                borderWidth: 1,
                borderRadius: 75
              }} source={require('./src/img/ecology.png')} />
            </View>
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center' }}>Radiación Ultravioleta</Text>
          <TouchableOpacity onPress={() => navigate('Ranking', { user: 'Lucy' })} >
            <View style={{ marginBottom: 30, justifyContent: 'center' }} >

              <Image style={{
                alignSelf: 'center',
                height: 120,
                width: 120,
                borderWidth: 1,
                borderRadius: 75
              }} source={require('./src/img/sun.png')} />
            </View>
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center' }}>Analisis</Text>
          <TouchableOpacity onPress={() => navigate('Aire', { user: 'Lucy' })} >
            <View style={{ marginBottom: 30, justifyContent: 'center' }} >

              <Image style={{
                alignSelf: 'center',
                height: 120,
                width: 120,
                borderWidth: 1,
                borderRadius: 75
              }} source={require('./src/img/analytics.png')} />
            </View>
          </TouchableOpacity>


        </View>


      </View>
    );
  }
}
const airMine = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Aire: { screen: AireScreen },
  Ranking: { screen: RankingScreen },
});







const MyApp = DrawerNavigator({
  Usuario: {
    screen: UsuarioScreen
  },
  Home: {
    screen: AireScreen,
  },
  Summer: {
    screen: SummerScreen,
  },
  Ranking: {
    screen: RankingScreen,
  },
  Uv: {
    screen: UvScreen,
  },

  Creditos: {
    screen: CreditosScreen,
  },
});

AppRegistry.registerComponent('airMine', () => MyApp);


