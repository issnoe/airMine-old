/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AppRegistry, ActivityIndicator, ScrollView, ListView, Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';

//import TestComp from './assets/components/test'

//import Inicio from './src/components/app.js'
import UsuarioScreen from './src/components/usuario.js'
import AireScreen from './src/components/aire.js'
import UvScreen from './src/components/uv.js'
import SummerScreen from './src/components/summer.js'
import RankingScreen from './src/components/rankingList.js'
import CreditosScreen from './src/components/creditos.js'

import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
console.log("hla mundo")
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


