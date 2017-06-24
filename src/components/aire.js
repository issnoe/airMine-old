import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,Button } from 'react-native';
import { stylesHome } from '../styles/home.js'
export default class AireScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }
  static navigationOptions = {
    title: 'x'

  };
  render() {

    const { params } = this.props.navigation.state;
    var styles = StyleSheet.create(stylesHome);
    return (
      <View style={styles.container}>
        <View style={[styles.quarterHeight, { backgroundColor: '#CCC' }]} />
        <View style={styles.halfHeight}>
          <Image style={styles.btnHomeAire} source={require('../img/ecology.png')} /></View>
        <View style={styles.quarterHeight}>
      <Text style={styles.texto}>S</Text>
          <Image style={styles.conteinerHomeAire} source={require('../img/nubesf.png')} />
        </View>
        <View style={[styles.quarterHeight, { backgroundColor: '#ffff' }]} />
      </View>

    );
  }
}