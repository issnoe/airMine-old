import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

export default class ButtonNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goUv(e) {
        e.preventDefault();
        this.props.navigation.navigate('Uv', { name: 'ssssss' });
    }
    goRanking(e){
         e.preventDefault();
        this.props.navigation.navigate('Ranking', { name: 'ssssss' });
    }
    render() {
        const styles = StyleSheet.create({
            container: { flex: .60, flexDirection: 'row', justifyContent: 'center' },
            divider: { flex: 2, height: 70 },
            btnNav: {
                backgroundColor: 'black', height: 52,
                width: 52, alignSelf: 'center', borderWidth: 1, borderRadius: 75, padding: 1,
            },
        });
        return (
            <View style={styles.container}>
                <View style={styles.divider}>
                     <TouchableOpacity onPress={this.goRanking.bind(this)} >
                    <View >
                        <Image style={{
                            alignSelf: 'center',
                            height: 45,
                            width: 45,
                            borderWidth: 1,
                            borderRadius: 75
                        }} source={require('../img/clipboard.png')}>

                        </Image>
                    </View>
                     </TouchableOpacity>
                </View>
                <View style={styles.divider}>
                    <TouchableOpacity onPress={this.goUv.bind(this)} >
                    <View >
                        <Image style={{
                            alignSelf: 'center',
                            height: 45,
                            width: 45,
                            borderRadius: 75
                        }} source={require('../img/sun.png')} />
                    </View>
                     </TouchableOpacity>
                </View>
            </View>
        );
    }
}