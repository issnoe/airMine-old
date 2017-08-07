import Meteor, {createContainer, Accounts} from 'react-native-meteor';
const SERVER_URL = 'ws://52.161.111.232:80/websocket';
import {mainStyles} from "./styles/main.js"
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    AsyncStorage,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {ButtonCustom, ContainerMain} from './share-ui/form.js'

import {NavToogle} from "./components/navigatorToogle.js"
var styles = StyleSheet.create(mainStyles);
class App extends Component {
    constructor(props) {
        super(props);
        Meteor.connect(SERVER_URL);
        this.state = {
            email: "",
            password: "",
            errorLogin: "",
            loadingLoading: false,
            errorCreate: "",
            loadingCreate: false,
            loginStatus: false
        };
        AsyncStorage.getItem('UID', (err, result) => {
            var userStorage = JSON.parse(result)
            if (userStorage != null) {
                  this.setState({errorLogin: "", loginStatus: true, loadingLoading: false});
            }
        });
    }

    onSignIn() {
        this.setState({errorLogin: "", loadingLoading: true});
        const {email, password} = this.state;

        if (this.isValid()) {
            Meteor.loginWithPassword(email, password, (error) => {

                if (error) {
                    this.setState({errorLogin: error.reason, loadingLoading: false});
                } else {
                  
                    AsyncStorage.setItem('UID', JSON.stringify(Meteor.user()));
                    this.setState({errorLogin: "", loginStatus: true, loadingLoading: false});
                }
            });
        }
    }

    onCreateAccount() {
        this.setState({errorCreate: "", loadingCreate: true});

        const {email, password} = this.state;

        if (this.isValid()) {
            Accounts.createUser({
                email,
                password
            }, (error) => {

                if (error) {
                    this.setState({errorCreate: error.reason, loadingCreate: false});

                } else {
                    this.onSignIn(); // temp hack that you might need to use
                }
            });
        }
    }
    isValid() {
        const {email, password} = this.state;
        let valid = false;

        if (this.props.statusServer != undefined && this.props.statusServer == true) {
            if (email.length > 0 && password.length > 0) {
                valid = true;
            }

            if (email.length === 0) {
                this.setState({errorLogin: 'Debes escribir el correo'});
            } else if (password.length === 0) {
                this.setState({errorLogin: 'Debes escribir la contraseña'});
            }

        } else {
            this.setState({errorLogin: 'No hay conexión', loadingLoading: false});
        }

        return valid;
    }
    onSignOut(){
        
    }

    render() {
        const {loginStatus} = this.state;

        if (loginStatus) {

            return (<NavToogle onSignOut={this.onSignOut}/>)

        }

        return (
            <ContainerMain>
                <View style={styles.conteiner}>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        onChangeText={(e) => {
                        this.setState({email: e})
                    }}
                        value={this.state.email}/>
                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(e) => {
                        this.setState({password: e})
                    }}
                        value={this.state.password}/>
                    <ButtonCustom
                        error={this.state.errorLogin}
                        loading={this.state.loadingLoading}
                        title="Entrar"
                        onClick={this
                        .onSignIn
                        .bind(this)}/>
                    <ButtonCustom
                        class="btnDefault"
                        error={this.state.errorCreate}
                        loading={this.state.errorCreate}
                        title="Crear"
                        onClick={this
                        .onCreateAccount
                        .bind(this)}/>
                </View>
            </ContainerMain>
        )

    }
}

export default createContainer(() => {
    var statusMeteor = Meteor.status();
    var handleItems = Meteor.subscribe('items');
    const isReady = handleItems.ready();
    if (isReady) {
        Meteor
            .collection('items')
            .find()
            .length;
        return {
            count: Meteor
                .collection('items')
                .find()
                .length,
            statusServer: statusMeteor.connected
        };
    } else {
        return {statusServer: statusMeteor.connected}
    }

}, App);