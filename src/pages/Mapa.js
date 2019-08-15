import React from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Map from '../components/Map';

export default class Mapa extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Map ref={map => this.map = map} />

                <TouchableOpacity style={styles.btnMenu} onPress={() => this.props.navigation.openDrawer()}>
                    <Icon name='menu' size={40} color={'rgba(51,51,51,0.8)'} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3'
    },

    btnMenu: {
        marginLeft: 20,
        marginTop: 20
    }
});