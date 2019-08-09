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

export default class Cadastro extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Form>
                    <TextInput
                        style={styles.input}
                    />

                    <TextInput 
                        style={styles.input}
                    />

                    <TextInput 
                        style={styles.input}
                    />

                    <TextInput 
                        style={styles.input}
                    />

                    <TextInput 
                        style={styles.input}
                    />

                    <TextInput 
                        style={styles.input}
                    />

                    <TextInput 
                        style={styles.input}
                    />

                    <TextInput 
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.btnCadastrar}>
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

		fontSize: 18,
        fontFamily: 'Montserrat-Regular',

        backgroundColor: 'rgba(255,255,255,0.8)',
		color: 'rgba(51,51,51,0.8)',
        marginHorizontal: 25
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