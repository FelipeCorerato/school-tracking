import React from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Animated,
    PixelRatio,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Marker, Callback } from 'react-native-maps';

import Map from '../components/Map';
import Directions from '../components/Directions';
import BottomDrawer from '../components/BottomDrawer';

export default class Mapa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      aoVivo: true,
      press: false,
      filhos: [
        {
          id: 1,
          nome: 'João Henri',
          region: {
            latitude: -22.8911732,
            longitude: -47.0382388,
          },
          escola: {
            id: 1,
            nome: 'Instituto Educacional Imaculada',
            region: {
              latitude: -22.8899812,
              longitude: -47.0623459
            }
          },
          motorista: {
            id: 1,
            nome: 'José da Silva',
            contato: ''
          }
        },
        {
          id: 2,
          nome: 'Artur Morais',
          region: {
            latitude: -22.8614771,
            longitude: -47.0606648,
          },
          escola: {
            id: 2,
            nome: 'Colégio Técnico da Unicamp - COTUCA',
            region: {
              latitude: -22.864420,
              longitude: -47.049530
            }
          },
          motorista: {
            id: 1,
            nome: 'Nicholas Patapoff',
            contato: ''
          }
        },
        {
          id: 3,
          nome: 'Felipe Corerato',
          region: {
            latitude: -22.8712874,
            longitude: -47.0406504,
          },
          escola: {
            id: 3,
            nome: 'Colégio Anglo Campinas - Taquaral',
            region: {
              latitude: -22.8665641,
              longitude: -47.0491057
            }
          },
          motorista: {
            id: 1,
            nome: 'Fabio Minguini',
            contato: ''
          }
        }
      ]
    }
  }

  static navigationOptions = {
    header: null
  }

  changeAoVivo = () => {
    this.state.press ? this.setState({ aoVivo: true, press: false }) : this.setState({ aoVivo: false, press: true });
  }
    
  render() {
    return (
      <View style={styles.container}>
        <Map ref={map => this.map = map} style={styles.map}>
          {this.state.filhos.map(filho => (
            <>
            {/*marcadores de filhos*/}
            <Marker 
              key={filho.id}
              coordinate={{
                latitude: filho.region.latitude,
                longitude: filho.region.longitude
              }}
              title={filho.nome}
            >
              <Icon name={'account-circle'} size={35} color={'rgba(51,51,51,1)'} />
            </Marker>

            {/*marcadores de escola*/}
            <Marker 
              key={filho.escola.id}
              coordinate={{
                latitude: filho.escola.region.latitude,
                longitude: filho.escola.region.longitude
              }}
              title={filho.escola.nome} 
            >
              <Icon name={'school'} size={30} color={'rgba(51,51,51,1)'} />
            </Marker>

            <Directions 
              key={filho.id}
              origin={filho.region}
              destination={filho.escola.region}
              onReady={result => {
                this.map.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 50,
                    left: 50,
                    top: 50,
                    bottom: 50
                  }
                });
              }}
            />
            </>
          ))}
        </Map>

        <SafeAreaView>
          <TouchableOpacity style={styles.btnMenu} onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' size={40} color={'rgba(51, 51, 51, 0.8)'} />
          </TouchableOpacity>
        </SafeAreaView>

        <BottomDrawer style={styles.bottomDrawer} containerHeight={300} 
            offset={30} 
            startUp={false}
            ref={bottomDrawer => this.bottomDrawer = bottomDrawer}
        >
          <View style={styles.maximizeContainer}>
              <TouchableOpacity style={styles.maximizeIcon} onPress={() => this.bottomDrawer.toggleDrawerState()} />
          </View>

          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={e => {
              const scrolled = e.nativeEvent.contentOffset.x;
              const filho = (scrolled > 0)
                  ? scrolled / Dimensions.get('window').width
                  : 0;
              const { latitude, longitude } = this.state.filhos[filho].region;

              this.map.mapView.animateToRegion({
                  latitude,
                  longitude
              })
          }}>
            {this.state.filhos.map(filho => (
              <View key={filho.id}>
                <TouchableOpacity activeOpacity={1}>
                  <View style={styles.previewContainer}>
                    <View style={styles.iconFilhoContainer}>
                      <Icon style={styles.iconFilho}
                        name={'account-circle'}
                        size={80}
                        color={'rgba(51,51,51,0.8)'} 
                      />
                    </View>

                    <View style={styles.previewTexts}>
                        <Text style={styles.textFilho}>
                          {filho.nome.length < 18 ? `${filho.nome}` : `${filho.nome.substring(0, 15)}...`}
                        </Text>
                        <Text style={styles.textMotorista}>
                          Motorista: {filho.motorista.nome.length < 18 ? `${filho.motorista.nome}` : `${filho.motorista.nome.substring(0, 15)}...`}
                        </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <View style={styles.fullInfos}>
                  <View style={styles.optionContainer}>
                    <TouchableOpacity style={styles.iconContainer} onPress={this.changeAoVivo}>
                        <Icon style={styles.icon}
                          name={this.state.press ? 'crosshairs' : 'crosshairs-gps'}
                          size={40}
                          color={this.state.press ? 'rgba(51,51,51,0.8)' : 'rgba(255,0,0,0.8)'} 
                        />
                    </TouchableOpacity>

                    <Text style={styles.text}>Ao vivo</Text>
                  </View>

                  <View style={styles.optionContainer}>
                    <TouchableOpacity 
                      style={styles.iconContainer} 
                      onPress={ () => this.props.navigation.navigate('Chat', { motorista: filho.motorista.nome })}
                    >
                      <Icon style={styles.icon}
                        name={'message'}
                        size={40}
                        color={'rgba(51,51,51,0.8)'} 
                      />
                    </TouchableOpacity>
                    
                    <Text style={styles.text}>Contato c/ motorista</Text>
                  </View>

                  <View style={styles.optionContainer}>
                    <TouchableOpacity style={styles.iconContainer} onPress={ () => this.props.navigation.navigate('Menu')}>
                      <Icon style={styles.icon}
                        name={'history'}
                        size={40}
                        color={'rgba(51,51,51,0.8)'} 
                      />
                    </TouchableOpacity>

                    <Text style={styles.text}>Histórico</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </BottomDrawer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  btnMenu: {
    marginLeft: 20
  },

  bottomDrawer: {
    width: '100%', 
    borderRadius: 30, 
    alignItems: 'center'
  },

    // Aqui ja e codigo antigo

    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    infosContainer: {
        width: Dimensions.get('window').width,
        borderRadius: 30,

        alignItems: 'center'
    },
    maximizeContainer: {
        width: Dimensions.get('window').width - 300,
        height: 20,

        marginTop: 0,
        marginHorizontal: 150,

        alignItems: 'center'
    },
    maximizeIcon: {
        width: Dimensions.get('window').width - 340,
        height: 5,
        borderRadius: 10,

        marginTop: 5,
        marginHorizontal: 170,

        backgroundColor: '#B8B8B8'
    },
    previewContainer: {
        width: Dimensions.get('window').width,
        height: 100,

        flexDirection: 'row',
        alignItems: 'stretch',
    },
    iconFilhoContainer: {
        width: 80,
        height: 80,

        marginLeft: 25
    },
    iconFilho: {
        //position: 'absolute',
    },
    previewTexts: {
        marginTop: 8,
        marginLeft: 5
    },
    textFilho: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,

        textAlign: 'left',

        color: '#515151'
    },
    textMotorista: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 21,

        textAlign: 'left',

        color: '#777777'
    },
    fullInfos: {
        width: Dimensions.get('window').width - 40,

        marginTop: 20,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        marginHorizontal: 20,
    },
    optionContainer: {
        width: 80,
        height: 100,

        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'column',

        alignItems: 'center',
    },
    menuIconContainer: {
        width: 50,
        height:50,

        marginLeft: 20,
        marginTop: 40,

        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        width: 40,
        height: 40
    },
    icon: {
        //position: 'absolute'
    },
    text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 17,

        color: '#515151'
    },
});