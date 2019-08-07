import React from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

export default class Main extends React.Component {
    render() {
        return(
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
