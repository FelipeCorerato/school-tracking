import React from 'react';
import {
    SafeAreaView,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mensagem: ''
        }
    }

    static navigationOptions = {
        headerTitle: 'Felipe Corerato',
        headerRight: <Icon name='account-circle' size={35} color='#000' style={{ marginRight: 5 }} />
    }

    sendMessage = () => {
        alert(this.state.mensagem);
        this.setState({ mensagem: '' });
    }

    render() {
        return (
            // <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior='padding'>
                    <View style={styles.chat}>
                        <Text>chat</Text>
                    </View>

                    <SafeAreaView style={styles.keyboardBox}>
                        <TextInput 
                            style={styles.textBox} 
                            placeholder='mensagem' 
                            value={this.state.mensagem}
                            onChangeText={mensagem => this.setState({ mensagem })}
                            onSubmitEditing={this.sendMessage}
                            returnKeyType='send'
                        />

                        <TouchableOpacity onPress={this.sendMessage}>
                            <Icon name='send' size={25} color='#000' />
                        </TouchableOpacity>
                    </SafeAreaView>
                </KeyboardAvoidingView>
            // </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },

    chat: {
        flex: 1,
        backgroundColor: '#FEE8A6'
    },

    mensagem: {
        justifyContent: 'space-between',

        paddingVertical: 6,
        paddingHorizontal: 3,

        borderColor: '#f3f3f3',
        borderWidth: 0.2
    },

    keyboardBox: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#f3f3f3',

        alignItems: 'center',  
        justifyContent: 'space-between',      

        paddingVertical: 5,
        paddingHorizontal: 10,

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    
    textBox: {
        flex: 2,
        height: 35,

        backgroundColor: '#fff',

        borderWidth: 0.4,
        borderColor: '#B9B9B9',

        borderRadius: 10,
        paddingHorizontal: 10
    }
});