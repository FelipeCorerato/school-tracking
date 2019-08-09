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
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Menu extends React.Component {
    logout = () => {
        // await firebase.auth().signOut();
        // await AsyncStorage.clear();

        this.props.navigation.navigate('Splash');
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.userData}>

                    </View>

                    <View style={styles.fastOptions}>
                        <TouchableOpacity>
                            <Text>Sair</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text>Ajustes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text>Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>

                </View>               
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        backgroundColor: '#DCB747'
    },

    userData: {
        flexDirection: 'row'
    },

    fastOptions: {
        flexDirection: 'row'
    },

    footer: {

    }
});