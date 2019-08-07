import React from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

import Form from '../components/Form';

export default class Login extends React.Component {
    login = async() => {

    }

    render() {
        return(
            <View>
                <Form>
                    <TextInput style={styles.input} />

                    <TextInput style={styles.input} />

                    <TouchableOpacity onPress={this.login}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </Form>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {

    }
});