import LogoSenac from '../assets/senac-logo.png'
import * as React from 'react';
import { Button, Text, StyleSheet, TextInput, View, Image } from 'react-native';
import * as SecureStore from 'expo-secure-store'

export default function LoginScreen({ navigation }) {
    const [dataLogin, setDataLogin] = React.useState({
        username: '',
        password: ''
    })

    function updateUsername(value) {
        const newDataLogin = {
            ...dataLogin
        }
        newDataLogin.username = value
        setDataLogin(newDataLogin)
    }

    function updatePassword(value) {
        const newDataLogin = {
            ...dataLogin
        }
        newDataLogin.password = value
        setDataLogin(newDataLogin)
    }

    async function logar() {
        try {
            // console.log('entrou em logar')
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify(dataLogin)
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw
              };
            //   console.log('requestOptions', requestOptions)
            const resp = await fetch("http://10.0.2.2:3000/login"
            , requestOptions)
            const bodyResp = await resp.json()
            console.log('resp',bodyResp)
            console.log(bodyResp)
        } catch (error) {
            console.warn(error)
        }
    }

    return (
        <View style={styles.container}>
            <Image width={100} height={200} style={{ flex: 1, objectFit: 'contain' }} source={LogoSenac} />
            <Text style={styles.title}>Login</Text>
            <TextInput value={dataLogin.username} onChangeText={updateUsername} style={styles.input} placeholder='Nome' />
            <TextInput value={dataLogin.password} onChangeText={updatePassword} style={styles.input} placeholder='Senha' keyboardType='numeric' />
            <Button style={styles.button}
                title="Logar"
                onPress={() => logar()}
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
        borderColor: '#000',
        borderRadius: 40,
        borderWidth: 1,
        marginBottom: 20
    },
    button: {
        flex: 1,
        fontSize: 20,
        width: 1300,
        display: 'flex'
    }
});