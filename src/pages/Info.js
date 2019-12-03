import React from 'react'
import { 
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Info extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: (
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>REI</Text>
          <Text>Versão 1.0</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Fale conosco</Text>
        <Text>Termos de privacidade</Text>
        <Text>2019 PD17 - PD Terror</Text>
        <Text>Feito com ♥ e JavaScript.</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  }
});