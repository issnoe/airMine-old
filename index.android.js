/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {AppRegistry, ActivityIndicator, ScrollView,ListView, Text,StyleSheet, View,Button, Image,TouchableOpacity} from 'react-native';
//import TestComp from './assets/components/test'
import Inicio from './src/components/app.js'
import AireScreen from './src/components/aire.js'
import UvScreen from './src/components/uv.js'
import SummerScreen from './src/components/summer.js'
import RankingScreen from './src/components/ranking.js'
import { StackNavigator ,DrawerNavigator,DrawerItems} from 'react-navigation';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    var options = {enableHighAccuracy: true, timeout: 10000, maximumAge: 3000}
      navigator.geolocation.getCurrentPosition(function(pos){
          this.setState(pos);
      }.bind(this), function(error){
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
      <Inicio s={this.state}/>
    
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
                flex:2,
                width: undefined, 
                height: 100, 
                resizeMode:"cover",
               
              },
              imagenRadio:{
                alignSelf: 'center',
                height: 150,
                width: 150,
                borderWidth: 1,
                borderRadius: 75
              },
              mainView:{
                flex:1,
                flexDirection: 'row', 
                backgroundColor: 'rgba(52, 52, 52, 0.8)'
              }
    });
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 2}}>
        <View style={{
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        
        
        alignItems: 'center',
      }}>
      <Text style={{alignSelf: 'center'}}>Calidad del aire</Text>
      <TouchableOpacity onPress={() => navigate('Chat', { user: 'Lucy' })} >
        <View style={{ marginBottom:30,justifyContent: 'center'}} >
          
          <Image   style={{
                alignSelf: 'center',
                height: 120,
                width: 120,
                borderWidth: 1,
                borderRadius: 75
              }} source={require('./src/img/ecology.png')}/>
        </View>
        </TouchableOpacity>
        <Text style={{alignSelf: 'center'}}>Radiación Ultravioleta</Text>
      <TouchableOpacity onPress={() => navigate('Ranking', { user: 'Lucy' })} >
        <View style={{ marginBottom:30,justifyContent: 'center'}} >
          
          <Image   style={{
                alignSelf: 'center',
                height: 120,
                width: 120,
                borderWidth: 1,
                borderRadius: 75
              }} source={require('./src/img/sun.png')}/>
        </View>
        </TouchableOpacity>
           <Text style={{alignSelf: 'center'}}>Analisis</Text>
      <TouchableOpacity onPress={() => navigate('Aire', { user: 'Lucy' })} >
        <View style={{ marginBottom:30,justifyContent: 'center'}} >
          
          <Image   style={{
                alignSelf: 'center',
                height: 120,
                width: 120,
                borderWidth: 1,
                borderRadius: 75
              }} source={require('./src/img/analytics.png')}/>
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
  Aire: { screen: AireScreen},
  Ranking: { screen: RankingScreen},
});






class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 's',
   drawerWidth: 50,
  drawerPosition: 'right',
  
  };



  render() {
    const {state} = this.props.navigation;
    const {setParams} = this.props.navigation;
    return (
      <ScrollView>
         <Text>Name: {(state.params )?state.params.name:''}</Text>
        
        <Button
        onPress={() => setParams({name: 'Lucyaa'})}
        title="Set title name to 'Lucy'"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
     
      </ScrollView>
      
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  
  };

  render() {
    this.props.navigation.navigate('DrawerClose'); 
      const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const {state} = this.props.navigation;
    const {setParams} = this.props.navigation;
    return (
           <Image
        source={require('./src/img/logindos.png')}
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
    }} source={require('./src/img/ecology.png')} />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
         
        <Button
          onPress={() => this.props.navigation.navigate('Home', {name: 'ssssss'})}
          title="Go to Brent's profile"
        />
      </Image>
    );
  }
}



const MyApp = DrawerNavigator({
  Home: {
    screen: AireScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  Summer: {
    screen: SummerScreen,
  },
  Uv: {
    screen: UvScreen,
  },
});

AppRegistry.registerComponent('airMine', () => MyApp);


