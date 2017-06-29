import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button , AsyncStorage} from 'react-native';
import PlaceTime from './placeTime.js'
import Rank from './rank.js'
import ButtonNavigation from './buttonNavigation.js'
export default class AireScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.user={}
    this.props.navigation.navigate('DrawerClose');
    //debugger;
   /* let UID_object = {
      name: 'Luis jasso',
      age: 30,
      
    };*/
    
    

    //AsyncStorage.setItem('UID', JSON.stringify(UID_object));

    AsyncStorage.getItem('UID', (err, result) => {
          var userStorage = JSON.parse(result)
          this.setState({user:userStorage});
    });

    
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
      conteinerButtons: {
        flex: 2,
        flexDirection: 'column',
      }
    });
    const { params } = this.props.navigation.state;

    return (
      <Image
        source={require('../img/logindos.png')}
        style={styles.container}>
        <PlaceTime />
        <Text>{(this.state.user)?this.state.user.name:'no hay usuario'}</Text>
        <Rank {...this.props} />
        <ButtonNavigation {...this.props} />
      </Image>

    );
  }
}
