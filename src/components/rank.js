import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

export default class Rank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1, 
               
                justifyContent: 'center',
                alignItems: 'center'
            },
            rankLabel: {
                fontFamily: 'sans-serif-thin',
                fontSize:21,
                color: 'white',
                fontWeight: 'bold',
            },
            rankLevel: {
                fontFamily: 'sans-serif-thin',
                fontSize: 80,
                paddingRight: 10,
                paddingLeft: 10,
                paddingTop: 0,
                paddingBottom: 9,

                fontWeight: 'bold',
               // backgroundColor: 'rgba(52, 52, 52, 0.8)',
                borderWidth: 0,
                borderRadius: 22,
                color: 'white',
                marginTop: 15,
                marginBottom:20
            }
            ,
            btnDetalles:{
                 fontFamily: 'sans-serif-thin',
            }


        });

        return (
            <View style={styles.container}>
                <Text style={styles.rankLabel}>
                    AQI
        </Text>
                <Text style={styles.rankLevel} >
                    21
        </Text>
                <Button
                    style={styles.btnDetalles} 
                    title="Ver detalles"
                />
            </View>
        );
    }
}