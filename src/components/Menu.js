import React from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Usuario from '../models/Usuario';

export default class Menu extends React.Component {
    handleLogout = async () => {
        await firebase.auth().signOut();
        // await AsyncStorage.clear();

        this.props.navigation.navigate('Splash');
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <SafeAreaView>
                        <View style={styles.userData}>
                            <Icon name='account-circle' size={85} color={'rgba(255,255,255,0.8)'} />

                            <View>
                                <Text style={[styles.userDataText, { fontSize: 20 }]}>{Usuario.nome}</Text>
                                <Text style={[styles.userDataText, { fontSize: 12 }]}>{Usuario.email}</Text>
                            </View>
                        </View>

                        <View style={styles.fastOptions}>
                            <TouchableOpacity style={styles.fastOptionButton} onPress={this.handleLogout}>
                                <Icon name='power' size={30} color='rgba(255,255,255,0.8)' />
                                <Text style={styles.fastOptionsTitle}>Sair</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.fastOptionButton} onPress={() => {}}>
                                <Icon name='settings' size={30} color='rgba(255,255,255,0.8)' />
                                <Text style={styles.fastOptionsTitle}>Ajustes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.fastOptionButton} onPress={() => this.props.navigation.navigate('Chat')}>
                                <Icon name='information' size={30} color='rgba(255,255,255,0.8)' />
                                <Text style={styles.fastOptionsTitle}>Info</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </View>

                <View style={styles.footer}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        backgroundColor: '#DCB747',
        paddingVertical: 10
    },

    userData: {
        flexDirection: 'row',
        marginTop: 20
    },

    userDataText: {
        fontFamily: 'Montserrat-Bold',

        textAlign: 'left',

        color: '#FFFFFF'
    },

    fastOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30,
    },

    fastOptionButton: {
        justifyContent: 'center', 
        alignItems: 'center'
    },

    fastOptionsTitle: {
        fontFamily: 'Montserrat-Bold', 
        color: '#FFFFFF', 
        textAlign: 'center'
    },

    footer: {

    }
});