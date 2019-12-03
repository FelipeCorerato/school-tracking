import React from 'react';
import MapView from 'react-native-maps';

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
                style={this.props.style}
                ref={map => this.mapView = map}
                region= {region}
                showsUserLocation
                rotateEnabled={false}
                loadingEnabled    
            >
                { this.props.children }
            </MapView>
        );
    }
}