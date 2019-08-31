import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 200 }}>
                <Spacer>
                    <Text h3 style={{ marginBottom: 20, color: '#ffffff', fontWeight: 'bold' }}>Sign up for Tracker</Text>
                </Spacer>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        label="Email"
                        labelStyle={{ color: 'white' }} inputStyle={{ color: 'white' }}
                    />
                <Spacer />
                    <Input
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize="none"
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        labelStyle={{ color: 'white' }} inputStyle={{ color: 'white' }}
                    />
                <Spacer>
                    <Button title="Sign Up" buttonStyle={{ backgroundColor: '#ffffff'}} titleStyle={{ color: '#000000', fontWeight: 'bold' }} />
                </Spacer>
            </View>
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c95d5d',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
    }
});

export default SignupScreen;