import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import MapView, { Marker, Callback } from 'react-native-maps';

import Directions from './Directions';

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            region: null
        }
    }

    // watchID: ?number = null;

    componentDidMount() {
        this.findCoordinates();
    }

    // async componentWillMount() {
	// 	try {
	// 		await Expo.Font.loadAsync({
    //             'Material Icons': require("@expo/vector-icons/fonts/MaterialIcons.ttf")
	// 		});
	// 	} catch (error) {
	// 		  console.log('ocorreu esse erro aqui: ', error);
	// 	}
    //     finally {
    //         this.setState({loading: false});
    //     }
    // }

    // async componentWillUnmount() {
    //     this.setState({loading: true});
    // }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0160,
                        longitudeDelta: 0.0140
                    }
                });
            },
            () => {}, //erro
            {
                timeout: 20000,
                enableHighAccuracy: true,
                maximumAge: 1000
            }
        )
    }

    render() {
        const { region } = this.state;

        return(
            <MapView 
                style={styles.map}
                ref={map => this.mapView = map}
                region= {region}
                showsUserLocation
                rotateEnabled={false}
                loadingEnabled    
            >
                {/* {this.state.filhos.map(filho => (
                        <Marker key={filho.escola.id}
                        coordinate={{
                            latitude: filho.escola.region.latitude,
                            longitude: filho.escola.region.longitude
                        }}
                        title={filho.escola.nome} >
                            <Icon name={'place'} size={30} color={'rgba(51,51,51,1)'} />
                        </Marker>
                )) }

                {this.state.filhos.map(filho => (
                    <Marker key={filho.id}
                        coordinate={{
                            latitude: filho.region.latitude,
                            longitude: filho.region.longitude
                        }}
                        title={filho.nome}>
                        <Icon name={'account-circle'} size={35} color={'rgba(51,51,51,1)'} />
                    </Marker>
                ))}

                {this.state.filhos.map(filho => (
                    <Marker key={filho.motorista.id}
                        coordinate={{
                        latitude: filho.motorista.latitude,
                        longitude: filho.motorista.longitude
                        }}
                        title={filho.motorista.nome}>
                        <Icon name={'directions-bus'} size={35} color={'#F2C94C'} />
                    </Marker>
                ))}

                {this.state.filhos.map(filho => (
                    <Directions key={filho.id}
                        origin={filho.region}
                        destination={filho.escola.region}
                        onReady={result => {
                            this.mapView.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: 50,
                                    left: 50,
                                    top: 50,
                                    bottom: 50
                                }
                            });
                        }}
                    />
                ))} */}
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});