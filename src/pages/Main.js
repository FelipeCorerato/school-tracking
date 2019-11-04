import React from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    Animated
} from 'react-native';

import SplashAnimation from '../components/SplashAnimation';

const bus = require('../../assets/img/icons/school-bus-icon-256.png');

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: new Animated.Value(0)
        }
    }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        Animated.timing(this.state.scale, { toValue: 1, duration: 1500 }).start();
    }

    render() {
        const scale = this.state.scale;

        return(
            <>
            <SplashAnimation />
            <SafeAreaView style={styles.container}>
                <Animated.View style={{ transform: [{ scale }], alignItems: 'center', marginTop: 60 }}>
                    <Image style={styles.icon} source={bus} />
                    <Text style={styles.title}>R E I</Text>
                </Animated.View>

                <TouchableOpacity style={[styles.button, styles.btnEntrar]} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={[styles.textButton, { color: '#F2C94C' }]}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.btnCadastrar]} onPress={() => this.props.navigation.navigate('Cadastro')}>
                    <Text style={[styles.textButton, { color: '#FFFFFF' }]}>CADASTRAR</Text>
                </TouchableOpacity>
            </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2C94C',
        // alignItems: 'center'
    },

    iconContainer: {
        marginTop: 100,
        alignItems: 'center'
    },

    icon: {
        width: 170,
        height: 170
    },

    title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 60,

        textAlign: 'center',

        color: '#515151'
    },

    button: {
        justifyContent: 'center',
        height: 60,

        borderRadius: 35,
        marginHorizontal: 35,

        shadowOffset:{  width: 0,  height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.5
    },

    btnEntrar: {
        backgroundColor: '#FFFFFF',
    	marginTop: 100
    },

    btnCadastrar: {
        backgroundColor: '#F2C94C',

        borderWidth: 2,
        borderColor: '#FFFFFF',

    	marginTop: 30
    },

    textButton: {
        fontFamily: 'Montserrat-Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,

        textAlign: 'center',
    }
})