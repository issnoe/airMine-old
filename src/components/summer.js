import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

export default class SummerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static navigationOptions = {
        drawerLabel: 'Resumen',
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
                paddingTop:12,
                alignItems: 'center'



            },
            conteinerRight: {
                flex: 2,
                justifyContent: 'center',
                paddingLeft:10

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
            valueData:{
                backgroundColor: 'grey',
              
                height: 18,
                width: 110,
                fontSize: 13,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom:10
               


            },
        });
        return (
            <ScrollView style={styles.main}>

                <Button

                    onPress={this.goResumen.bind(this)}
                    style={styles.btnlink}
                    title=" < Ir a AirMine"
                />

                <View style={styles.container}>
                    <View style={styles.divider}>
                        <Text style={styles.place}>
                            Santa Fe
                    </Text>
                        <Text style={styles.date}>
                            Sab 24 de Junio 2018
                    </Text>
                    </View>
                    <View style={styles.dividerLeft}>
                        <TouchableOpacity >
                            <Image
                                style={styles.updateBtn}
                                source={require('../img/refresh.png')}
                            />
                            <Text style={styles.btnLabel}>
                                Actualizar
                    </Text>

                        </TouchableOpacity>

                    </View>

                </View>
                <View style={styles.container}>
                    <View style={styles.mainLeft}>
                        <View style={styles.container}>
                            <View style={styles.conteinerLeft}>

                                    <Text style={styles.labelSustancia}>
                                        aqi
                                    </Text>
                                    <Text style={styles.rankCirculo}>
                                        124
                                    </Text>
                                    <Text style={styles.labelSustancia}>
                                        Buena
                                    </Text>
                            </View>
                            <View style={styles.conteinerRight}>

                                <Text >
                                    PM2.5
                                </Text>

                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.conteinerLeft}>

                                   
                                    <Text style={styles.rankCirculo}>
                                        124
                                    </Text>
                                    <Text style={styles.labelSustancia}>
                                        Buena
                                    </Text>
                            </View>
                            <View style={styles.conteinerRight}>

                                <Text >
                                    PM2.5
                                </Text>

                            </View>
                        </View>
                            <View style={styles.container}>
                            <View style={styles.conteinerLeft}>

                                   
                                    <Text style={styles.rankCirculo}>
                                        124
                                    </Text>
                                    <Text style={styles.labelSustancia}>
                                        Buena
                                    </Text>
                            </View>
                            <View style={styles.conteinerRight}>

                                <Text >
                                    PM2.5
                                </Text>

                            </View>
                        </View>
                            <View style={styles.container}>
                            <View style={styles.conteinerLeft}>

                                   
                                    <Text style={styles.rankCirculo}>
                                        124
                                    </Text>
                                    <Text style={styles.labelSustancia}>
                                        Buena
                                    </Text>
                            </View>
                            <View style={styles.conteinerRight}>

                                <Text >
                                    PM2.5
                                </Text>

                            </View>
                        </View>
                            <View style={styles.container}>
                            <View style={styles.conteinerLeft}>

                                   
                                    <Text style={styles.rankCirculo}>
                                        124
                                    </Text>
                                    <Text style={styles.labelSustancia}>
                                        Buena
                                    </Text>
                            </View>
                            <View style={styles.conteinerRight}>

                                <Text >
                                    PM2.5
                                </Text>

                            </View>
                        </View>
                    </View>

                    <View style={styles.mainRight}>
                    <Text >
                           Fecha y hora
                    </Text>
                        <Text >
                            2017-03-29
                    </Text>
                      <Text >
                          
                    </Text>
                      <Text >
                          
                    </Text>

                    <Text >
                          Reporte
                    </Text>
                    
                        <Text >
                            +08:00
                    </Text>
                     <Text >
                          
                    </Text>
                      <Text >
                          
                    </Text>
                    <Text >
                          TEMPERATURA
                    </Text>
                    <Text style={styles.valueData}>
                           6.60 C
                    </Text>
                    <Text >
                          HUMEDAD
                    </Text>
                    <Text style={styles.valueData}>
                           60 %
                    </Text>
                    <Text >
                          PRESION
                    </Text>
                    <Text style={styles.valueData}>
                          1017 hPa
                    </Text>

                    </View>
                </View>

            </ScrollView>

        );
    }
}
