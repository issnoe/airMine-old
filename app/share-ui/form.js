import {mainStyles} from "../styles/main.js"
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
var styles = StyleSheet.create(mainStyles);
export class ButtonCustom extends Component {
    render() {
        var styT;
        var styB;
        switch (this.props.class) {
            case "btnPrimary":
                styB = styles.btnPrimary
                styT = styles.btnTextPrimary
                break;
                case "btnDefault":
                styB = styles.btnDefault
                styT = styles.btnTextDefault
                break

            default:
                styB = styles.btnPrimary
                styT = styles.btnTextPrimary
                break;
        }
        return (
            <TouchableOpacity style={styles.row} onPress={this.props.onClick}>
                <View style={styB}>
                    <Text style={styT}>{this.props.title}</Text>
                </View>
                {(this.props.loading)
                    ? <ActivityIndicator/>
                    : undefined}
                {(this.props.error && !this.props.loading)
                    ? <Text style={styles.errorMsg}>{this.props.error}</Text>
                    : undefined}
            </TouchableOpacity>
        )
    }
}
export class ContainerMain extends Component {
    render() {
        return (
            <Image source={require('../../src/img/nubesf.png')} style={styles.containerImage}>
                <View>
                    <Text style={styles.appTitle}> BIENVENIDO A AIRMINE</Text>
                    <Image style={styles.iconApp} source={require('../../src/img/ecology.png')}/>
                    {this.props.children}
                </View>
            </Image>

        )

    }
}