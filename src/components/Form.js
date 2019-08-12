import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native'

export default class Form extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25
    }
});