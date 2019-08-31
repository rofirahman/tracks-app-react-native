import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

const TrackCreateScreen = (props) => {
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setErr({
                errorMessage: 'Permission to access location was denied',
            });
        }
        await Location.watchPositionAsync({
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
        }, (location) => {
            console.log(location)
        })
    }

    useEffect(() => {
        startWatching()
    }, [])

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2 h2Style={{ marginLeft: 20 }}>Create Track</Text>
            <Map />
            { err ? <Text>Please enable location services</Text> : null }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default TrackCreateScreen;