import React from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native'

export default class Form extends React.Component {
    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                {this.props.children}
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25
    }
});