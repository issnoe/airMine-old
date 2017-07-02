import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, AsyncStorage, TextInput } from 'react-native';
import {getAireData} from '../helper/webserviceAir.js'

export  class HandleScreenStorage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={}
  }
  updateStorageAir(callback){
    getAireData(function(estatus,resp){
    AsyncStorage.setItem('AIRE', JSON.stringify(resp));
    callback(resp)
    }.bind(this))
  }
  render() {
    return (
      ""
    );
  }
}