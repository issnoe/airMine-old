
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import React, { Component, PropTypes } from 'react';

import { mainStyles } from "../../styles/main.js"
import {ButtonCustom, ContainerMain} from '../../share-ui/form.js'
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
var styles = StyleSheet.create(mainStyles);
class UserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.user = {}
    this.props.navigation.navigate('DrawerClose');
    AsyncStorage.getItem('UID', (err, result) => {
      var userStorage = JSON.parse(result)

    });
  }
  static navigationOptions = {
    tabBarVisible: true
  };
          
updateUser  = (e) => {
  e.preventDefault();
  alert("Se ha guarado correctamente")

}
  render() {

    const {params} = this.props.navigation.state;
    var imc = (this.state.talla >0 && this.state.peso>0)?(this.state.peso/(this.state.talla*this.state.talla)):(0.0)
    return (
      <View >
        <Text style={styles.textHeader}>
          Datos del usuario
          {(this.props.count) ? undefined : undefined}

        </Text>
         <Text>  Nombre usuario: </Text>
        <TextInput
       
          style={styles.textInputSettings}
          onChangeText={(e) => {
            this.setState({ nombreusuario: e })
          }}
          value={this.state.nombreusuario} />
           <Text>Email: </Text>
        <TextInput
      
          style={styles.textInputSettings}
          onChangeText={(e) => {
            this.setState({ email: e })
          }}
          value={this.state.email} />
          
        <Text>Edad: </Text>
          <TextInput
         
          style={styles.textInputSettings}
          keyboardType='numeric'
          onChangeText={(e) => {
            this.setState({ edad: e })
          }}
          value={this.state.edad} />
          <Text>Peso: </Text>
          <TextInput
          
          keyboardType='numeric'
          style={styles.textInputSettings}
          onChangeText={(e) => {
            this.setState({ peso: e })
          }}
          value={this.state.peso} />
          <Text>Estatura: </Text>
          <TextInput
         
          style={styles.textInputSettings}
          keyboardType='numeric'
          onChangeText={(e) => {
            this.setState({ talla: e })
          }}
          value={this.state.talla} />
          <Text>IMC:</Text>
          <Text>{imc}</Text>
           <ButtonCustom
                        error={this.state.errorLogin}
                        loading={this.state.loadingLoading}
                        title="Actualizar"
                        onClick={this.updateUser}/>

      </View>
    )




  }
}


export default createContainer(() => {
  var statusMeteor = Meteor.status();
  var handleItems = Meteor.subscribe('tasks');
  const isReady = handleItems.ready();
  if (isReady) {
    var userd = Meteor.user();
    var id = Meteor.userId()
    return {
      count: Meteor.collection('tasks').find({}, { sort: { createdAt: -1 } }),
      statusServer: statusMeteor.connected
    };
  } else {
    return { statusServer: statusMeteor.connected }
  }

}, UserScreen);
