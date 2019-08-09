import React from 'react';
import { 
    View,
    ActivityIndicator,
    TouchableOpacity,
    Text,
    Asset
} from 'react-native';
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
                // 'Material Icons': require('../../node-modules/@expo/vector-icons/website/src/fonts/MaterialIcons.ttf')
			});
            await Asset.loadAsync([
                require('../../assets/school-bus-icon-256.png')                
            ]);

		} catch (error) {
			  console.log('ocorreu esse erro aqui: ', error);
		}
        finally {
            this.setState({loading: false});
        }
    }

    componentDidMount() {
        // this.authListener();
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
        // User.email = user.email;
    }

    // authListener() {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             this.setState({ user });
    //         } else {
    //             this.setState({ user: null });
    //         }
    //     })
    // }

    // Render any loading content that you like here
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2C94C' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthStack')}>
                    <ActivityIndicator size='large' color='#515151' />
                </TouchableOpacity>
            </View>
        );
    }
}

