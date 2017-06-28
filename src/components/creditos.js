import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default class CreditosScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Creditos',

    };

    render() {
        this.props.navigation.navigate('DrawerClose');
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                width: undefined,
                height: undefined,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
            },
        });
        const {state} = this.props.navigation;
        const {setParams} = this.props.navigation;
        return (
            <Image
                source={require('../img/logindos.png')}
                style={styles.container}>
                <Text style={styles.welcome}>
                    Bienvenido a AirMine
        </Text>
            <Text style={styles.instructions}>
                    La aplicacion que te dice la calidad {'\n'} del aire en tu ubicación
        </Text>
                <Image style={{
                    alignSelf: 'center',
                    height: 90,
                    width: 90,
                    marginTop: 35,
                    borderWidth: 1,
                    borderRadius: 75
                }} source={require('../img/ecology.png')} />
                <Text style={styles.instructions}>
                    Esta aplicación te ayudara a tomar las medidas {'\n'} adecuadas para evitar problemas de salud 
        </Text>
                

                <Button
                    onPress={() => this.props.navigation.navigate('Home', { name: 'ssssss' })}
                    title="Iniciar"
                />
                <Text style={styles.instructions}>
                    UPEMOR
                
        </Text>
            </Image>
        );
    }
}