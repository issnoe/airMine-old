/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {AppRegistry, ActivityIndicator, ListView, Text, View,Button} from 'react-native';
//import TestComp from './assets/components/test'
import Inicio from './src/components/app'
import { StackNavigator } from 'react-navigation';
class airMine2 extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    var options = {enableHighAccuracy: true, timeout: 10000, maximumAge: 3000}
      navigator.geolocation.getCurrentPosition(function(pos){
         // debugger;
          //guardar en localStorage
          this.setState(pos);
          /**Mode init */
      }.bind(this), function(error){
          debugger;
          //Actualizar localstorage
      });
  }
  render() {
    return (
      <Inicio s={this.state}/>
    );
  }
}
class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
const airMine = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});


AppRegistry.registerComponent('airMine', () => airMine);


