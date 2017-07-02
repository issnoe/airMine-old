import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  AsyncStorage
} from 'react-native';
import PlaceTime from './placeTime.js'
import Rank from './rank.js'
import ButtonNavigation from './buttonNavigation.js'
import {getStatus} from "../helper/calidadAire.js"
import {getAireData} from '../helper/webserviceAir.js'
export default class AireScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.user = {}
    this.state.location = {}
    this
      .props
      .navigation
      .navigate('DrawerClose');
      this._getDataWS();
  }
  static navigationOptions = {
    drawerLabel: 'Calidad del aire',
    drawerWidth: 50,
    drawerPosition: 'right'
  };
   updateStorageAir(callback){
    getAireData(function(estatus,resp){
    AsyncStorage.setItem('AIRE', JSON.stringify(resp));
    callback(resp)
    }.bind(this))
  }

  _getDataWS() {
     this.updateStorageAir(function (data) {
      this.setState({
        isLoading: false,
        dataWebSer: data
      }, function () {
      });
    }.bind(this));
  }
  renderData() {
    var dataWeb = this.state.dataWebSer
    if (dataWeb) {
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
        alignItems: 'center'
      },
      conteinerButtons: {
        flex: 2,
        flexDirection: 'column'
      }
    });
    const {params} = this.props.navigation.state;
    var statusData = {}
    var imagenBack = require('../img/logindos.png')
    if (this.state.dataWebSer) {
      statusData = getStatus(this.state.dataWebSer.aqi)
      imagenBack = statusData.imagen
    }
    return (
      <Image source={imagenBack} style={styles.container}>
        <PlaceTime
          data={this.state.dataWebSer}
          onChange={this
          .updateLocation
          .bind(this)}/>
        <Rank {...this.props} data={this.state.dataWebSer} status={statusData}/>
        <ButtonNavigation {...this.props}/>
      </Image>

    );
  }
}
