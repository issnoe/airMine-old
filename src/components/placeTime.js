import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

export default class PlaceTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const styles = StyleSheet.create({
            container: { flex: .40, flexDirection: 'row',  justifyContent: 'center' },
            divider: { flex: 2, width: 50, height: 80 },
            dividerLeft: {
                flex: .50, width: 50, height: 80, marginRight: 10,
                alignItems: 'center',
            },
            
            updateBtn: { width: 20, height: 20, alignItems: 'center',marginLeft:15,marginTop:18},
            place: {
                paddingLeft: 20,
                fontFamily: 'sans-serif-thin',
                fontSize: 40,
                color: 'white',

            },
            date: {
                paddingLeft: 20,
                fontFamily: 'sans-serif-thin',
                fontSize: 15,
                color: 'black',

            },
            btnLabel: { textAlign: 'right',fontFamily: 'sans-serif-thin',
                fontSize: 14,
                marginBottom:17,
                color: 'black'},
            timeLabel: { textAlign: 'right',fontFamily: 'sans-serif-thin',
                fontSize: 14,
                marginBottom:3,
                color: 'black'},

        });

        return (
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
                    <Text style={styles.timeLabel}>
                        tz -10:00

                    </Text>
                    <Text style={styles.timeLabel}>
                        10:00
                        
                    </Text>
                </View>
            </View>
        );
    }
}