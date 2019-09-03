import React from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Animated,
    StyleSheet
} from 'react-native';
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Map from '../components/Map';
import BottomDrawer from '../components/BottomDrawer';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

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

                <BottomDrawer containerHeight={300} offset={49} startUp={false}>
                    <View>
                        <Text>Bottom Drawer</Text>
                    </View>
                </BottomDrawer>
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