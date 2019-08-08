import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default class Main extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View>
                    <Image style={styles.icon} source={require('../../assets/icons/school-bus-icon-256.png')} />
                    <Text style={styles.title}>R E I</Text>
                </View>

                <TouchableOpacity style={styles.btnEntrar}>
                    <Text style={[styles.textButton, { color: '#F2C94C' }]}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCadastrar}>
                    <Text style={[styles.textButton, { color: '#FFFFFF' }]}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2C94C',
        alignItems: 'center'
    },

    iconContainer: {
        marginTop: 100,
        alignItems: 'center'
    },

    icon: {
        width: 160,
        height: 160
    },

    title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 60,

        textAlign: 'center',

        color: '#515151'
    },

    btnEntrar: {

    },

    btnCadastrar: {

    },

    textButton: {
        fontFamily: 'Montserrat-Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,

        textAlign: 'center',
    }
})