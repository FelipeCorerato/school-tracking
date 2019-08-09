import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyDIU6Oj1OvIYjRpsPD1ZzPEVxBZvdoyu6Y"
        strokeWidth={3}
        strokeColor="#515151"
    />
);

export default Directions;