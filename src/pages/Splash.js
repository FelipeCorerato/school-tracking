import React from 'react';
import { 
    View,
    ActivityIndicator,
    TouchableOpacity,
    Text
} from 'react-native';
import firebase from 'firebase';

export default class Splash extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         user: {}
    //     }
    // }

    // static navigationOptions = {
    //     header: null
    // }

    // componentWillMount() {
    //     // Initialize Firebase
    //     if (!firebase.apps.length) {
    //         firebase.initializeApp(firebaseConfig);
    //     }
    // }

    // componentDidMount() {
    //     // this.authListener();
    //     this.checkIfLoggenIn();
    // }

    // checkIfLoggenIn = () => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             this.recuperarDados();
    //             this.props.navigation.navigate('AppStackWithModal');
    //         } else {
    //             this.props.navigation.navigate('AuthStackWithModal')
    //         }
    //     });
    // }

    // recuperarDados = () => {
    //     const user = firebase.auth().currentUser;
    //     User.email = user.email;
    // }

    // authListener() {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             this.setState({ user });
    //         } else {
    //             this.setState({ user: null });
    //         }
    //     })
    // }

    // Fetch the token from storage then navigate to our appropriate place
    // async componentDidMount() {
    //     const user = await AsyncStorage.getItem('user');
    //     this.props.navigation.navigate(user ? 'AppStack' : 'AuthStack');
    // }

    // Render any loading content that you like here
    render() {
        return (
            <View style={{ marginTop: 50 }}>
                <ActivityIndicator />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthStack')}>
                    <Text>Proxima</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
