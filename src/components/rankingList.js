import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Button, AsyncStorage } from 'react-native';

export default class RankingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
         AsyncStorage.getItem('AIRE', (err, result) => {
            var dataAire = JSON.parse(result)
            if (dataAire != null) {

                this.setState({ dataStore: dataAire });
            }
        });
    }
    static navigationOptions = {
        drawerLabel: 'Ranking lugares cercanos',
        drawerWidth: 50,
        drawerPosition: 'right',

    };
    goResumen(e) {
        e.preventDefault();
        this.props.navigation.navigate('Home', { name: 'ssssss' });
    }




    render() {
        this.props.navigation.navigate('DrawerClose');
        const {state} = this.props.navigation;
        const {setParams} = this.props.navigation;
        const styles = StyleSheet.create({
            main: {
                flex: 1,

            },
            container: {
                flex: .40,
                flexDirection: 'row', justifyContent: 'center',
            },
            divider: { flex: 2, width: 50, height: 80 },
            dividerLeft: {
                flex: .50, width: 50, height: 80, marginRight: 10,
                alignItems: 'center',
            },

            updateBtn: { width: 20, height: 20, alignItems: 'center', marginLeft: 15, marginTop: 18 },
            place: {
                paddingLeft: 20,
                fontFamily: 'sans-serif-thin',
                fontSize: 20,
                color: 'black',

            },
            date: {
                paddingLeft: 20,
                fontFamily: 'sans-serif-thin',
                fontSize: 15,
                color: 'black',

            },
            btnLabel: {
                textAlign: 'right', fontFamily: 'sans-serif-thin',
                fontSize: 14,
                marginBottom: 17,
                color: 'black'
            },
            timeLabel: {
                textAlign: 'right', fontFamily: 'sans-serif-thin',
                fontSize: 14,
                marginBottom: 3,
                color: 'black'
            },
            mainLeft: {
                flex: 1,
            },
            mainRight: {
                flex: 1,

                alignItems: 'center',
                justifyContent: 'center',


            },

            conteinerLeft: {
                flex: 2,
                paddingTop: 12,
                alignItems: 'center'



            },
            conteinerRight: {
                flex: 2,
                justifyContent: 'center',
                paddingLeft: 10

            },
            rankCirculo: {
                backgroundColor: 'aqua',
                borderRadius: 20,
                height: 40,
                width: 40,
                fontSize: 13,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingTop: 10


            },
            labelSustancia: {
                fontSize: 12,
            },
            valueData: {
                backgroundColor: 'grey',

                height: 18,
                width: 110,
                fontSize: 13,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 10



            },
            dividerList:{
                textAlign:'center',
                backgroundColor:'black',
                color:'white',
                fontWeight:'bold',
            },
            textTitle:{
               
                textAlign:'center',
                fontSize:18,
                backgroundColor: '#f7f7f7',

            },
        });
        return (
            <ScrollView style={styles.main}>

                <Button

                    onPress={this.goResumen.bind(this)}
                    style={styles.btnlink}
                    title="Inicio"
                />

                <View style={styles.container}>
                    <View style={styles.mainLeft}>
                        <Text style={styles.textTitle}>Lista lugares cercanos mejos contaminados</Text>
                       
                         <View style={styles.container}>
                    
                    <View style={styles.mainLeft}>
                        <View style={styles.container}>
                            <View style={styles.conteinerLeft}>

                                <Text style={styles.labelSustancia}>
                                    aqi
                                    </Text>
                                <Text style={{
                                    backgroundColor: ((this.state.dataStore) ? this.state.dataStore.estatus.color : 'red'),
                                    borderRadius: 20,
                                    height: 40,
                                    width: 40,
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    paddingTop: 10
                                }}>
                                    {(this.state.dataStore) ? this.state.dataStore.aqi : "?"}
                                </Text>
                                <Text style={styles.labelSustancia}>
                                    {(this.state.dataStore) ? this.state.dataStore.estatus.status : "?"}
                                </Text>
                            </View>
                            <View style={styles.conteinerRight}>

                                <Text >
                                    Cuernavaca
                                </Text>

                            </View>
                            <View style={styles.conteinerRight}>

                                <Text >
                                    Reporte 08:00
                                </Text>

                            </View>
                        </View>
                       
                    </View>

                    
                </View>
                       
                    </View>

                   
                </View>

            </ScrollView>

        );
    }
}
