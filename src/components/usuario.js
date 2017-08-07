import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  AsyncStorage,
  TextInput,
  TouchableOpacity
} from 'react-native';
import PlaceTime from './placeTime.js'
import Rank from './rank.js'
import ButtonNavigation from './buttonNavigation.js'
import {HandleScreenStorage} from "./handleStateStorage"
import {getAireData} from '../helper/webserviceAir.js'
import Meteor, {createContainer, Accounts} from 'react-native-meteor';

class UsuarioScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.user = {}
    this
      .props
      .navigation
      .navigate('DrawerClose');
    AsyncStorage.getItem('UID', (err, result) => {
      var userStorage = JSON.parse(result)
      if (userStorage != null) {

        this.updateStorageAir(() => {});
        //this.props.navigation.navigate('Home');
        this.setState({user: userStorage});
      }
    });
  }
 

  handleAddItem(e) {
    e.preventDefault();

    const name = Math.floor(Math.random() * 10); // just generate some random number
    Meteor.call('Items.addOne', {
      name
    }, (err, res) => {
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
    drawerPosition: 'right'
  };
  goStart(e) {
    e.preventDefault();
    debugger;
    this
    let UID_object = {
      email: this.state.email,
      name: 'Sin nombre'
    };
    AsyncStorage.setItem('UID', JSON.stringify(UID_object));

    this
      .props
      .navigation
      .navigate('Home');
  }
  cleanUser(e) {
    e.preventDefault();
    AsyncStorage.removeItem('UID')
    this.setState({user: {}})
  }
  handlePassword = (e) => {
    this.setState({password: e})
  }
  handleEmail = (e) => {
    this.setState({email: e})
  }
  managerAccount = (e) => {
    e.preventDefault();
    if (this.props && this.props.statusServer) {
      var options = {
        username: this.state.username,
        password: this.state.password
      }
      Accounts.createUser(options, function (err, resul) {
        debugger;
      })

    } else {
      //go without login but show alert
    }

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
      conteinerDivider: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textInput: {
        height: 40,
        backgroundColor: 'white',
        width: 190,
        marginBottom: 15,
        marginTop: 15
      },

      appTitle: {
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 20,
        color: 'white',
        paddingTop: 60
      },
      textNormal: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 7
      }
    });
    const {params} = this.props.navigation.state;
    
      return (
        <View >
          <Text>
            Este es el panel del Usuario {this.state.user.email}
          </Text>
          <Button
            onPress={this
            .cleanUser
            .bind(this)}
            title="Cerrar sesion"/>
          <Text style={styles.textNormal}>
            Item Count: {this.props.count}
          </Text>

          <TouchableOpacity
            style={styles.textNormal}
            onPress={this
            .handleAddItem
            .bind(this)}>
            <Text>Add Item</Text>
          </TouchableOpacity>

        </View>
      )

    

   
  }
}

export default createContainer(() => {
  var statusMeteor = Meteor.status();
  var handleItems = Meteor.subscribe('items');
  const isReady = handleItems.ready();
  if (isReady) {
    Meteor
      .collection('items')
      .find()
      .length;
    return {
      count: Meteor
        .collection('items')
        .find()
        .length,
      statusServer: statusMeteor.connected
    };
  } else {
    return {statusServer: statusMeteor.connected}
  }

}, UsuarioScreen);