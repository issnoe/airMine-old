import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, AsyncStorage } from 'react-native';
import PlaceTime from './placeTime.js'
import Rank from './rank.js'
import ButtonNavigation from './buttonNavigation.js'
import { getStatus } from "../helper/calidadAire.js"

export default class AireScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.user = {}
    this.state.location = {}
    this.props.navigation.navigate('DrawerClose');
    this._getDataWS()
  }
  static navigationOptions = {
    drawerLabel: 'Aire Mine',
    drawerWidth: 50,
    drawerPosition: 'right',

  };

  _getDataWS() {
    var options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 3000 }
    navigator.geolocation.getCurrentPosition(function (pos) {
      var dataLocation = pos
      this.setState({ location: pos });
      if (dataLocation && dataLocation.coords) {
        var stringCoord = "geo:" + dataLocation.coords.latitude + ";" + dataLocation.coords.longitude;
        var urlWithLocation = "https://api.waqi.info/feed/" + stringCoord + "/?token=15bae679176be73a9af8eabd9e9099d4b027828d";
        return fetch(urlWithLocation).then((response) => response.json()).then((responseJson) => {
          var dataWebSer = responseJson.data;
                   this.setState({
            isLoading: false,
            dataWebSer: dataWebSer
          }, function () {
            // do something with new state
          });
        }).catch((error) => {
          alert("No se encuentran datos");
        });
      }



    }.bind(this), function (error) {

    });
  }
  renderData() {

    var dataWeb = this.state.dataWebSer
    if (dataWeb) {
      debugger
      var lista = []
      for (var key in dataWeb) {
        lista.push(
          <Text key={"$key" + key + "lista"}>{key + ": " + dataWeb[key].v}</Text>
        )
      }
      return lista;
    }


  }
  updateLocation(e) {

    this._getDataWS()
  }


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
    var statusData = {}
    var imagenBack = require('../img/logindos.png')
    if (this.state.dataWebSer) {
      statusData = getStatus(this.state.dataWebSer.aqi)
      imagenBack = statusData.imagen
    }
    return (
      <Image
        source={imagenBack}
        style={styles.container}>
        <PlaceTime data={this.state.dataWebSer} onChange={this.updateLocation.bind(this)} />
        <Rank {...this.props} data={this.state.dataWebSer} status={statusData} />
        <ButtonNavigation {...this.props} />
      </Image>

    );
  }
}
