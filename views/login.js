import LogoSenac from '../assets/senac-logo.png'
import * as React from 'react';
import { Button, Text, StyleSheet, TextInput, View, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image width={100} height={200} style={{ flex: 1, objectFit: 'contain' }} source={LogoSenac} />
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder='Nome' />
            <TextInput style={styles.input} placeholder='Senha' keyboardType='numeric' />
            <Button
                title="Logar"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 370,
        padding: 60,
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 60,
    },
    input: {
        flex: 1,
        fontSize: 20,
        width: '100%',
        maxHeight: 50,
        textAlign: 'center',
        flexWrap: 'nowrap',
        color: '#fff',
        borderColor: '#000',
        borderRadius: 40,
        borderWidth: 1,
        marginBottom: 20
    }
});