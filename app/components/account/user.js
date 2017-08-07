
import Meteor, {createContainer, Accounts} from 'react-native-meteor';
import React, {Component} from 'react';

import {mainStyles} from "../../styles/main.js"
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

// navigationOptions: {
//       mode:"card",
//       title: "Sign In",
//       headerMode: "none",
//       header:null,
//       headerTitleStyle: { color: "white" },
//       gesturesEnabled: true,
//       tabBarVisible: true
//     }
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
 render() {
    
    const {params} = this.props.navigation.state;
    
      return (
        <View >
          <Text style={styles.textNormal}>
            Item Count: {this.props.count}
          </Text>

        </View>
      )

    

   
  }
}

export default createContainer(() => {
  var statusMeteor = Meteor.status();
  var handleItems = Meteor.subscribe('items');
  const isReady = handleItems.ready();
  if (isReady) {
    console.log(isReady)
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

}, UserScreen);
 