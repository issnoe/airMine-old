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
                fontSize: 35,
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
        var data = this.props
        

        return (
            <View style={styles.container}>
                <View style={styles.divider}>
                    <Text style={styles.place}>
                        {(data && data.data)?data.data.city.name:"Cargando . . ."} 
                    </Text>
                    <Text style={styles.date}>
                          {(data && data.data)?data.data.time.s:"Cargando . . ."} 
                    </Text>
                </View>
                <View style={styles.dividerLeft}>
                    <TouchableOpacity onPress={()=>{this.props.onChange(true)}}>
                        <Image
                            style={styles.updateBtn}
                            source={require('../img/refresh.png')}
                        />
                        <Text style={styles.btnLabel}>
                            Actualizar
                    </Text>
                        
                    </TouchableOpacity>
                    <Text style={styles.timeLabel}>
                        tz  {(data && data.data)?data.data.time.tz:"Cargando . . ."}

                    </Text>
                    
                </View>
            </View>
        );
    }
}