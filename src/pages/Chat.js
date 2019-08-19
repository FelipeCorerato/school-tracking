import React from 'react';
import {
    SafeAreaView,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    FlatList,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            destinatario : {

            },
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
            <View style={styles.container}>
                {/* <View style={styles.chat}>
                    <Text>chat</Text>
                </View> */}
                <FlatList 
                    style={{ padding: 10, height: '80%' }}
                    // data={this.state.messageList}
                    // renderItem={this.renderRow}
                    keyExtractor={(item, index) => index.toString()}
                />

                <SafeAreaView>
                <View style={styles.keyboardBox}>
                    <TextInput 
                        style={styles.textBox} 
                        placeholder='mensagem' 
                        value={this.state.mensagem}
                        onChangeText={mensagem => this.setState({ mensagem })}
                        onSubmitEditing={this.sendMessage}
                        returnKeyType='send'
                    />

                    <TouchableOpacity style={{ marginLeft: 5 }} onPress={this.sendMessage}>
                        <Icon name='send' size={25} color='#000' />
                    </TouchableOpacity>
                </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3'
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

    mensagemEnviada: {
        backgroundColor: 'red'
    },

    mensagemRecebida: {
        backgroundColor: 'blue'
    },

    keyboardBox: {
        // flex: 1,
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#f3f3f3',

        alignItems: 'center',  
        justifyContent: 'space-between',  

        paddingVertical: 5,
        paddingHorizontal: 10,

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

        borderTopColor: '#B9B9B9',
        borderTopWidth: 0.8,
        borderRightColor: '#B9B9B9',
        borderRightWidth: 0.8,
        borderLeftColor: '#B9B9B9',
        borderLeftWidth: 0.8
    },
    
    textBox: {
        width: '90%',
        height: 35,

        backgroundColor: '#fff',

        borderWidth: 0.4,
        borderColor: '#B9B9B9',

        borderRadius: 10,
        paddingHorizontal: 10
    }
});