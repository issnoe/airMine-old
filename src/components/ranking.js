import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { stylesHome } from '../styles/home.js'
export default class RankingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }
  static navigationOptions = {
    title: 'x'

  };
  render() {

    const { params } = this.props.navigation.state;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    return (
      <Image
        source={require('../img/logindos.png')}
        style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Image style={{
          alignSelf: 'center',
          height: 90,
          width: 90,
          marginTop: 35,
          borderWidth: 1,
          borderRadius: 75
        }} source={require('../img/ecology.png')} />
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