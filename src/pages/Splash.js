import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { firebaseConfig } from '../config';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    static navigationOptions = {
        header: null
    }

    async componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

		try {
			await Expo.Font.loadAsync({
  		        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
                'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
			});

		} catch (error) {
			  console.log('ocorreu esse erro aqui: ', error);
		}
        finally {
            this.setState({ loading: false });
        }
    }

    componentDidMount() {
        this.checkIfLoggenIn();
    }

    checkIfLoggenIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.recuperarDados();
                this.props.navigation.navigate('AppStack');
            } else {
                this.props.navigation.navigate('AuthStack')
            }
        });
    }

    recuperarDados = () => {
        const user = firebase.auth().currentUser;

        // Usuario.nome = user.nome;
        // Usuario.email = user.email;
    }

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='#515151' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#F2C94C' 
    } 
});