import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { stylesHome } from '../styles/home.js'
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
      pp: {
        fontFamily: 'Cochin',
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
      },
      titleText: {
        fontFamily: 'Cochin',
        fontSize: 80,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 9,
        paddingBottom: 9,

        fontWeight: 'bold',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderWidth: 0,
        borderRadius: 22,
        color: 'white',
        marginTop: 30,
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
        <Text style={styles.pp}>
          AQI
        </Text>
        <Text style={styles.titleText} >
          21
        </Text>
        <View tyle={styles.conteinerButtons}>
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
/**
 * <View style={styDivider.container}>
        <View style={[styDivider.quarterHeight, { backgroundColor: '#CCC' }]} />
        <View style={styDivider.halfHeight}>
          <Image style={styDivider.btnHomeAire} source={require('../img/ecology.png')} /></View>
        <View style={styDivider.quarterHeight}>
          <Text style={styDivider.texto}>S</Text>
          <Image style={styDivider.conteinerHomeAire} source={require('../img/nubesf.png')} />
        </View>
        <View style={[styDivider.quarterHeight, { backgroundColor: '#ffff' }]} />
      </View>
 */