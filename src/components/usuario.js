import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, AsyncStorage, TextInput, TouchableOpacity } from 'react-native';
import PlaceTime from './placeTime.js'
import Rank from './rank.js'
import ButtonNavigation from './buttonNavigation.js'
import { HandleScreenStorage } from "./handleStateStorage"
import { getAireData } from '../helper/webserviceAir.js'
import Meteor, { createContainer,Accounts } from 'react-native-meteor';


const SERVER_URL = 'ws://52.161.111.232:80/websocket';
class UsuarioScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    this.state.user = {}
    this.props.navigation.navigate('DrawerClose');
    AsyncStorage.getItem('UID', (err, result) => {
      var userStorage = JSON.parse(result)
      if (userStorage != null) {

        this.updateStorageAir(() => { });
        //this.props.navigation.navigate('Home');
        this.setState({ user: userStorage });
      }
    });
  }
  componentWillMount() {
    Meteor.connect(SERVER_URL);
  }

  handleAddItem(e) {
    e.preventDefault();
    debugger
    this;
    var options={
      username:"luis",password:"123456"

    }
    Accounts.createUser(options, function(err, resul){
      debugger;
    })
    
    const name = Math.floor(Math.random() * 10); // just generate some random number
    Meteor.call('Items.addOne', { name }, (err, res) => {
      // Do whatever you want with the response
      console.log('Items.addOne', err, res);
    });
  }
  updateStorageAir(callback) {
    getAireData(function (estatus, resp) {
      AsyncStorage.setItem('AIRE', JSON.stringify(resp));
      callback(resp)
    }.bind(this))
  }



  static navigationOptions = {
    drawerLabel: 'Usuario',
    drawerWidth: 10,
    drawerPosition: 'right',

  };
  goStart(e) {
    e.preventDefault();
    let UID_object = {
      email: this.state.email,
      name: 'Sin nombre',
    };
    AsyncStorage.setItem('UID', JSON.stringify(UID_object));

    this.props.navigation.navigate('Home');
  }
  cleanUser(e) {
    e.preventDefault();
    AsyncStorage.removeItem('UID')
    this.setState({ user: {} })
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
      conteinerDividerM: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',


      },
      conteinerDivider: {
        flex: 2,

        justifyContent: 'center',
        alignItems: 'center',


      },
      conteinerDividerS: {
        flex: .50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


      },
      emailInput: {
        height: 40,
        backgroundColor: 'white',
        width: 190,
        marginBottom: 15,
        marginTop: 15
      }
      ,
      btnInicio: {

      },
      welcome: {
        textAlign: 'center',
        fontSize: 12,
        marginBottom: 7
      },
      instructions: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 7
      }
    });
    const { params } = this.props.navigation.state;



    if (this.state.user && this.state.user.email) {
      return (
        <View style={styles.conteinerDividerM}>
          <Text>
            Este es el panel del Usuario
{this.state.user.email}
          </Text>
          <Button
            style={styles.btnInicio}
            onPress={this.cleanUser.bind(this)}
            title="Cerrar sesion"
          />

          <Text style={styles.welcome}>
            Welcome to React Native + Meteor!
        </Text>
          <Text style={styles.instructions}>
            Item Count: {this.props.count}
          </Text>

          <TouchableOpacity style={styles.instructions} onPress={this.handleAddItem.bind(this)}>
            <Text>Add Item</Text>
          </TouchableOpacity>

        </View>
      )

    }

    return (
      <Image
        source={require('../img/nubesf.png')}
        style={styles.container}>
        <View style={styles.conteinerDividerM}>

          <Text style={styles.welcome}>
            Bienvenido a AirMine
        </Text>
          <Text style={styles.instructions}>
            La aplicacion que te dice la calidad {'\n'} del aire en tu ubicación
        </Text>


          <View style={styles.conteinerDividerS}>
            <Image style={{
              alignSelf: 'center',
              height: 90,
              width: 90,
              marginTop: 35,
              borderWidth: 1,
              borderRadius: 75
            }} source={require('../img/ecology.png')} />
          </View>

          <View style={styles.conteinerDivider}>
            <TextInput
              placeholder="Email"
              style={styles.emailInput}
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.text}
            />
            <TextInput
              placeholder="Contraseña"
              secureTextEntry={true}
              style={styles.emailInput}
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
            />
            {(this.state.email && this.state.email.length > 2) ? (<Button
              style={styles.btnInicio}
              onPress={this.goStart.bind(this)}
              title="Iniciar"
            />) : undefined}

          </View>

        </View>


      </Image>

    );
  }
}

export default createContainer(() => {
  var statusMeteor =  Meteor.status();
  var handleItems = Meteor.subscribe('items');
  const isReady = handleItems.ready();
  if(isReady){
    console.log(`Handle is ${isReady ? 'ready' : 'not ready'}`); 
   Meteor.collection('items').find().length;
  return {
    count: Meteor.collection('items').find().length,
  };

  }else{
    return {
      statusServer : statusMeteor.connected
    }
  }
  
}, UsuarioScreen);