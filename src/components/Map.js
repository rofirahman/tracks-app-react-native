import React from 'react';
import {
  View, Text, StyleSheet, Dimensions
} from 'react-native';
import MapView, { Polyline } from 'react-native-maps'

const Map = (props) => {
    let points = []
    for(let i = 0; i < 20; i++) {
        points.push({
            latitude: 37.32323 + i * 0.001,
            longitude: -122.0123 + i * 0.001
        })
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.32323,
                longitude: -122.0123,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }} >
            <Polyline
                coordinates={points}
            />
        </MapView>
    );
}

const mapHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    map: {
        height: mapHeight - 200,
    }
});

export default Map;