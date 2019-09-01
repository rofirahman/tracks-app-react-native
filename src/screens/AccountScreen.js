import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { MaterialIcons } from '@expo/vector-icons'

const AccountScreen = (props) => {
    const { signout } = useContext(AuthContext)
    return (
        <View>
            <Text style={{ fontSize: 48 }}>Account Screen</Text>
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={signout}
                />
            </Spacer>
        </View>
    );
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <MaterialIcons name='settings' size={28} />,
    headerRight: <MaterialIcons name='settings' size={28} />
}

const styles = StyleSheet.create({

});

export default AccountScreen;