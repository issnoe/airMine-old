import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
export default class Rank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goResumen(e) {
        e.preventDefault();
        this.props.navigation.navigate('Summer', { name: 'ssssss' });
    }

    render() {
         var status=null
        const styles = StyleSheet.create({
            container: {
                flex: 1,

                justifyContent: 'center',
                alignItems: 'center'
            },
            rankLabelStatus: {
                fontFamily: 'sans-serif-thin',
                fontSize: 15,
                padding:3,
                width:109,
                textAlign:'center',
                color: 'white',
                fontWeight: 'bold',
                backgroundColor:'rgba(52, 52, 52, 0.8)',
                 marginBottom: 10,
            },
            rankLabel: {
                fontFamily: 'sans-serif-thin',
                fontSize: 15,
                backgroundColor:'white',
                color: 'black',
                fontWeight: 'bold',
                 marginBottom: 0,
                 width:109,
                 textAlign:'center',
                 
                 padding:1
              
            },
            rankLevel: {
                fontFamily: 'sans-serif-thin',
                fontSize: 80,
                paddingRight: 10,
                paddingLeft: 10,
                paddingTop: 0,
                paddingBottom: 0,

                fontWeight: 'bold',
                 backgroundColor: 'rgba(52, 52, 52, 0.8)',
                borderWidth: 0,
                borderRadius: 0,
                color: 'white',
                marginTop: 15,
                marginBottom: 0
            }
            ,
            btnDetalles: {
                fontFamily: 'sans-serif-thin',
            }


        });
        var data = this.props
        
       
        return (
            <View style={styles.container}>
               
                <Text style={styles.rankLevel} >
                  {(data && data.data)?data.data.aqi:"...."}
        </Text>
         <Text style={styles.rankLabel}>
                    AQI
                    
        </Text>
         <Text style={styles.rankLabelStatus}>
                    {(this.props && this.props.status)?this.props.status.status:"..."}
        </Text>
                <Button
                    onPress={this.goResumen.bind(this)}
                    style={styles.btnDetalles}
                    title="Ver"
                />

            </View>
        );
    }
}