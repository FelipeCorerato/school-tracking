import React from 'react';
import { 
  StyleSheet, 
  StatusBar,
  SafeAreaView, 
  View, 
  Text, 
  Animated, 
  Easing,
  Dimensions,
} from 'react-native';
import * as Font from 'expo-font';
import LottieView from "lottie-react-native";

const dimensions = Dimensions.get('window');
const bus = require('../../assets/bus.json');

export default class SplashAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.animatedDoorValue = new Animated.Value(0);
    this.animatedColorValue = new Animated.Value(0);

    this.state = {
      fontLoaded: false,
      unmont: false
    }
  }

  async componentDidMount() {
    // Carrega a fonte do App
    await Font.loadAsync({
      'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });

    // Inicia a animacao Lottie
    this.animation.play();

    // Inicia a animacao da porta
    this.closeDoorsAnimation();
  }
  
  closeDoorsAnimation() {
    this.animatedDoorValue.setValue(0);

    Animated.timing(this.animatedDoorValue, {
      toValue: 1,
      duration: 3000,
      ezasing: Easing.linear
    }).start(() => this.opacityAnimation());
  }

  opacityAnimation() {
    Animated.timing(this.animatedColorValue, { 
      toValue: 150,
      duration: 3000,
      ezasing: Easing.linear
    }).start(() => this.openDoorsAnimation());
  }

  openDoorsAnimation() {
    this.setState({ unmont: true });
    this.animatedDoorValue.setValue(1);

    Animated.timing(this.animatedDoorValue, {
      toValue: 0,
      duration: 2500,
      ezasing: Easing.linear
    }).start();
  }

  render() {
    const movingMargin = this.animatedDoorValue.interpolate({
      inputRange: [0, 0.5],
      outputRange: [0, dimensions.width/2],
      extrapolate: 'clamp'
    });

    var color = this.animatedColorValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgba(69, 70, 71, 0.4)', 'rgba(69, 70, 71, 1)']
    });

    return (
      <>
        <StatusBar barStyle='light-content' backgroundColor={'#fff'} />

        <Animated.View style={[styles.busDoors, { 
          left: '-50%', backgroundColor: color, borderRightWidth: 20, marginLeft: movingMargin 
        }]} />

        <Animated.View style={[styles.busDoors, { 
          right: '-50%', backgroundColor: color, borderLeftWidth: 20, marginRight: movingMargin 
        }]} />

        { this.state.unmont ? null : (
          <>
            <SafeAreaView style={[styles.onTop, { flex: 0, backgroundColor: '#fff', zIndex: 3 }]} /> 
            <SafeAreaView style={[styles.onTop, { 
              flex: 1, 
              backgroundColor: '#8AC348', 
              height: dimensions.height, 
              zIndex: 2 
            }]}>
              <View style={styles.animationContainer}>
                { this.state.fontLoaded && (
                  <Text style={styles.title}>R E I</Text>
                )}
                
                <LottieView
                  style={styles.lottie}
                  ref={animation => this.animation = animation}
                  source={bus}
                />

                <View style={styles.buttonContainer} />
              </View>
            </SafeAreaView>
          </>
        )}          
      </>
    );
  }
}

const styles = StyleSheet.create({
  // Estilo para deixar a splash encima de tudo
  onTop: {
    position: 'absolute', 
    top: 0, 
    left: 0,

    width: dimensions.width
  },

  animationContainer: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: '#fff'
  },

  lottie: {
    width: 400, 
    height: 400, 
    
    backgroundColor: '#fff'
  },

  buttonContainer: {
    flex: 2,

    width: '100%',
    paddingTop: 20,
    
    backgroundColor: '#8AC348'
  },

  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 60,

    textAlign: 'center',
    marginTop: 10,

    color: '#515151'
  },

  busDoors: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 4,
    width: '50%', 
    borderColor: '#545758',
  }
});
