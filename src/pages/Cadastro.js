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

import Form from '../components/Form';
import Usuario from '../models/Usuario';

export default class Cadastro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            senha: '',
            confirmSenha: '',
            celular: '',
            isSignedIn: false
        }
    }

    handleCadastro = async () => {
        if (this.state.nome == '' || this.state.email == ''  || this.state.senha == '' || this.state.confirmSenha == '' || this.state.celular == '')
            return Alert.alert('Campos inválidos', 'Há campos não preenchidos!');

        if (this.state.senha != this.state.confirmSenha)
            return Alert.alert('Confirmação inválida', 'Sua senha e confimação não coincidem!');

        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha);

            var user = await firebase.auth().currentUser;

            // User.uid = uid;
            // User.email = this.state.email;
            // User.nome = this.state.nome;

            // await firebase.database().ref('usuarios').push({email: this.state.email, nome: this.state.nome});

            // await AsyncStorage.setItem('user', user);

            Usuario.email = user.email;
            Usuario.nome = this.state.nome;

            // const dados = {
            //     email: User.email,
            //     nome: User.nome
            // } 

            // firebase.database().ref('usuarios/' + User.uid).set({ email: User.email });
            // firebase.database().ref('usuarios/' + User.uid).set({ nome: User.nome });
            // firebase.database().ref('usuarios/' + User.uid).set({ fotoPerfil: '' });

            // firebase.database().ref('usuarios/' + User.uid).set(dados);

        } catch (err) {
            if (err.code == 'auth/invalid-email')
                return Alert.alert('Falha no cadastro', 'Este email não é válido!');
            if (err.code == 'auth/user-disabled')
                return Alert.alert('Falha no cadastro', 'Esta conta de email foi desativada!');
            if (err.code == 'auth/email-already-in-use')
                return Alert.alert('Falha no cadastro', 'Este email já está sendo usado!');
            if (err.code == 'auth/weak-password')
                return Alert.alert('Falha no cadastro', 'Sua senha deve ter pelo menos 6 caracteres!')

            Alert.alert(err);
        }

        if (this.state.isSignedIn) {
            this.props.navigation.navigate('Splash');
        }

        this.setState({ isSignedIn: false });
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Form>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome'
                        ref={component => this.nome = component}
                        onChangeText={nome => this.setState({ nome })}
                        value={this.state.nome}
                        autoCorrect={false}
                        onSubmitEditing={() => this.celular.focus()}
                        returnKeyType='next'    
                    />

                    <TextInput 
                        style={styles.input}
                        placeholder='Celular'
                        ref={component => this.celular = component}
                        onChangeText={celular => this.setState({ celular })}
                        value={this.state.celular}
                        autoCorrect={false}
                        autoCapitalize='none'
                        onSubmitEditing={() => this.email.focus()}
                        keyboardType='number-pad'
                        returnKeyType='next'    
                    />

                    <TextInput 
                        style={styles.input}
                        placeholder='Email'
                        ref={component => this.email = component}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        autoCorrect={false}
                        autoCapitalize='none'
                        onSubmitEditing={() => this.senha.focus()}
                        keyboardType='email-address'
                        returnKeyType='next'
                    />

                    <TextInput 
                        style={styles.input}
                        placeholder='Senha'
                        ref={component => this.senha = component}
                        onChangeText={senha => this.setState({ senha })}
                        value={this.state.senha}
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        onSubmitEditing={() => this.confirmSenha.focus()}
                        returnKeyType='next'    
                    />

                    <TextInput 
                        style={styles.input}
                        placeholder='Confirme sua senha'
                        ref={component => this.confirmSenha = component}
                        onChangeText={confirmSenha => this.setState({ confirmSenha })}
                        value={this.state.confirmSenha}
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        onSubmitEditing={this.handleCadastro}
                        returnKeyType='go'
                    />

                    <TouchableOpacity style={styles.btnCadastrar} onPress={this.handleCadastro}>
                        <Text style={styles.btnCadastrarText}>CADASTRAR</Text>
                    </TouchableOpacity>
                </Form>
            </SafeAreaView>
        )
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
		color: 'rgba(51,51,51,0.8)',
        // marginHorizontal: 25
    },

    btnCadastrar: {
        height: 60,

        backgroundColor: '#FFFFFF',
        justifyContent: 'center',

        borderRadius: 35,

    	marginTop: 70,
        marginHorizontal: 40,

        shadowOffset:{  width: 0,  height: 4,  },
        shadowColor: 'black',
        shadowOpacity: 0.5
    },

    btnCadastrarText: {
        fontFamily: 'Montserrat-Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,

        textAlign: 'center',

        color: '#F2C94C'
    }
});