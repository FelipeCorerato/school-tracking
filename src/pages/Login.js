import React from 'react';
import {
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert
} from 'react-native';
import firebase from 'firebase';

import Form from '../components/Form';
import Usuario from '../models/Usuario';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            isAuthenticated: false
        }
    }

    componentDidMount() {
        if (this.state.isAuthenticated) {
            this.props.navigation.navigate('Splash');
        }
    }

    handleLogin = async () => {
        if (this.state.email == '' || this.state.senha == '') {
            Alert.alert('Campos inválidos', 'Há campos não preenchidos!');
            return;
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha);

            var user = await firebase.auth().currentUser;
            // await firebase.database().ref(`usuarios/${user.uid}`).on('value', function(snapshot) {
            //     // alert(JSON.stringify(snapshot.val()));
            //     userInfo = snapshot.val().nome;
            //     // return User.nome = snapshot.val().nome;
            // }.bind(this));
            // await firebase.firestore().collection('usuarios').doc(user.uid).get().then(doc => { alert(doc.data()) })
            // await AsyncStorage.setItem('user', user);
            // alert(JSON.stringify(userInfo))
            Usuario.email = user.email;
        } catch (err) {
            if (err.code == 'auth/invalid-email')
                return Alert.alert('Falha no login', 'Este email não é válido!', [
                    {
                        text: 'OK',
                        onPress: () => { this._email.focus() }
                    }
                ]);
            if (err.code == 'auth/user-disabled')
                return Alert.alert('Falha no login', 'Esta conta de email foi desativada!');
            if (err.code == 'auth/user-not-found')
                return Alert.alert('Falha no login', 'Conta de email não cadastrada!', [
                    {
                        text: 'OK',
                        onPress: () => {
                            this.setState({ senha: '' });
                            this.email.focus();
                        }
                    }
                ]);
            if (err.code == 'auth/wrong-password') {
                return Alert.alert('Falha no login', 'Senha incorreta!', [
                    {
                        text: 'OK',
                        onPress: () => { this.password.focus() }
                    }
                ]);
            }

            alert(err)
        }

        if (this.state.isAuthenticated) {
            this.props.navigation.navigate('Splash');
        }

        this.setState({ isAuthenticated: false });
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Form>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Email'
                        ref={component => this.email = component}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        autoCorrect={false}
                        autoCapitalize='none'
                        onSubmitEditing={() => this.password.focus()}
                        keyboardType='email-address'
                        returnKeyType='next'    
                    />

                    <TextInput 
                        style={styles.input} 
                        placeholder='Senha'
                        ref={component => this.password = component}
                        onChangeText={senha => this.setState({ senha })}
                        value={this.state.senha}
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        onSubmitEditing={this.handleLogin}
                        returnKeyType='go'    
                    />

                    <TouchableOpacity style={styles.btnEntrar} onPress={this.handleLogin}>
                        <Text style={styles.btnEntrarText}>ENTRAR</Text>
                    </TouchableOpacity>
                </Form>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2C94C'
    },

    input: {
        height: 50,
        borderRadius: 50,
        marginTop: 15,
        paddingHorizontal: 20,

        fontSize: 18,
        fontFamily: 'Montserrat-Regular',

        backgroundColor: 'rgba(255,255,255,0.8)',
		color: 'rgb(51,51,51)',

        // marginHorizontal: 25
    },

    btnEntrar: {
        height: 60,

        backgroundColor: '#FFFFFF',
        justifyContent: 'center',

        borderRadius: 35,

        marginTop: 100,
        // marginHorizontal: 40,

        shadowOffset:{  width: 0,  height: 4,  },
        shadowColor: 'black',
        shadowOpacity: 0.5
    },

    btnEntrarText: {
        fontFamily: 'Montserrat-Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,

        textAlign: 'center',

        color: '#F2C94C'
    }
});