import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'

const TrackCreateScreen = (props) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create Track</Text>
            <Map />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default TrackCreateScreen;