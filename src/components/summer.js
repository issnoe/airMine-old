import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Button, AsyncStorage } from 'react-native';
import { Bar } from 'react-native-pathjs-charts'
import { getStatusIAQI } from "../helper/calidadAire.js"
export default class SummerScreen extends React.Component {
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
        drawerLabel: 'Resumen',
        drawerWidth: 50,
        drawerPosition: 'right',

    };
    goResumen(e) {
        e.preventDefault();
        this.props.navigation.navigate('Home', { name: 'ssssss' });
    }
    getDataStorage() {

    }
    renderSustancias() {
        const styles = StyleSheet.create({

            container: {
                flex: .40,
                flexDirection: 'row', justifyContent: 'center',
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

        });

        var listReturn = []
        if (this.state.dataStore && this.state.dataStore.iaqi) {
            var listaSustancias = this.state.dataStore.iaqi
            for (var index in listaSustancias) {
                if (index != "t" && index != "w" && index != "wd" && index != "p" && index != "h") {
                    var rankStatusSustancia = getStatusIAQI(listaSustancias[index].v, index)
                    var sustancia = (
                        <View key={index} style={styles.container}>
                            <View style={styles.conteinerLeft}>
                                <Text style={{
                                    backgroundColor: ((rankStatusSustancia) ? rankStatusSustancia.color : 'red'),
                                    borderRadius: 20,
                                    height: 40,
                                    width: 40,
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    paddingTop: 10
                                }}>
                                    {listaSustancias[index].v}
                                </Text>
                                <Text style={styles.labelSustancia}>
                                    {rankStatusSustancia.status}
                                </Text>
                            </View>
                            <View style={styles.conteinerRight}>
                                <Text >
                                    {rankStatusSustancia.name}
                                </Text>
                            </View>
                        </View>

                    )
                    listReturn.push(sustancia)
                }

            }

        } else {
            listReturn.push(<View style={styles.container}>
                <View style={styles.conteinerLeft}>
                    <Text style={styles.rankCirculo}>

                    </Text>
                    <Text style={styles.labelSustancia}>

                    </Text>
                </View>
                <View style={styles.conteinerRight}>
                    <Text >

                    </Text>
                </View>
            </View>)
        }
        return listReturn
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
            row: {
                flex: 1,
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
            containerGrafica: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f7f7f7',
                paddingRight: 50,
                paddingLeft: 60,
            }
        });

        //grafica
        let data = [
            [{
                "v": 49,
                "name": "Lunes"
            }, {
                "v": 42,
                "name": "Martes"
            }],
            [{
                "v": 69,
                "name": "Miercoles"
            }, {
                "v": 62,
                "name": "Jueves"
            }],
            [{
                "v": 29,
                "name": "Viernes"
            }, {
                "v": 15,
                "name": "Sabado"
            }]
        ]

        let options = {
            width: 290,
            height: 200,
            margin: {
                top: 20,
                left: 25,
                bottom: 50,
                right: 20
            },
            color: '#2980B9',
            gutter: 20,
            animate: {
                type: 'oneByOne',
                duration: 200,
                fillTransition: 3
            },
            axisX: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'bottom',
                label: {
                    fontFamily: 'Arial',
                    fontSize: 8,
                    fontWeight: true,
                    fill: '#34495E',
                    rotate: 45
                }
            },
            axisY: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'left',
                label: {
                    fontFamily: 'Arial',
                    fontSize: 8,
                    fontWeight: true,
                    fill: '#34495E'
                }
            }
        }
        return (
            <ScrollView style={styles.main}>

                <Button
                    onPress={this.goResumen.bind(this)}
                    style={styles.btnlink}
                    title=" < Ir a AirMine"
                />
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Text>{(this.state.dataStore) ? this.state.dataStore.estatus.implicacion : ""} </Text>
                    </View>
                    <View style={styles.row}>
                        <Text>{(this.state.dataStore) ? this.state.dataStore.estatus.advertencias : ""} </Text>
                    </View>


                </View>
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
                                    índice de la calidad del aire
                                </Text>

                            </View>
                        </View>
                        {this.renderSustancias()}
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
                <View style={styles.containerGrafica}>
                    <Text>
                        Puntuación AQI más alta por día
                     </Text>

                    <Bar data={data} options={options} accessorKey='v' />
                </View>

            </ScrollView>

        );
    }
}
