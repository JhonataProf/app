import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, TextInput, View, Image } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation

export default function CadastroScreen({ navigation }) {
    
    const [dataCadastro, setDataCadastro] = React.useState({
        name: '',
        email: '',
        datanascimento: '',
        telefone: '',
        endereco: '',
        cpf: '',
        genero: ''
    })

    function updatePatient(value) {
        const newDataCadastro = {
            ...dataCadastro,
        };
        newDataCadastro.paciente = value;
        setDataCadastro(newDataCadastro);
    }

    function updateEmail(value) {
        const newDataCadastro = {
            ...dataCadastro,
        };
        newDataCadastro.email = value;
        setDataCadastro(newDataCadastro);
    }

    function updateDate(value) {
        const newDataCadastro = {
            ...dataCadastro,
        };
        newDataCadastro.data = value;
        setDataCadastro(newDataCadastro);
    }

    function updateTelephone(value) {
        const newDataCadastro = {
            ...dataCadastro,
        };
        newDataCadastro.telefone = value;
        setDataCadastro(newDataCadastro);
    }

    function updateAddress(value) {
        const newDataCadastro = {
            ...dataCadastro,
        };
        newDataCadastro.endereco = value;
        setDataCadastro(newDataCadastro);
    }

    function updateCpf(value) {
        const newDataCadastro = {
            ...dataCadastro,
        };
        newDataCadastro.cpf = value;
        setDataCadastro(newDataCadastro);
    }

    function updateGender(value) {
        const newDataCadastro = {
            ...dataCadastro,
        };
        newDataCadastro.genero = value;
        setDataCadastro(newDataCadastro);
    }

    async function Cadastrar() {
        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            const raw = JSON.stringify(dataCadastro);
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };
            const resp = await fetch(
                'https://api-pi-senac.azurewebsites.net/cadastro',
                requestOptions
            );
            const bodyResp = await resp.json();
            const token = bodyResp.token;
            SecureStore.setItem('bearer', token);
            navigation.navigate('Cadastro');
        } catch (error) {
            console.warn(error);
        }
    }
      function navegarPara(destino) {
        navigation.navigate(destino)
      }
    return (
        <View style={styles.container}>
            <Image width={100} height={200} style={{ flex: 1, objectFit: 'contain' }} source={LogoSenac} />
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                value={dataCadastro.patient}
                onChangeText={updatePatient}
                style={styles.input}
                placeholder='Nome do Paciente'
                secureTextEntry={true}
                keyboardType='default'
                extContentType='patient'
            />
            <TextInput
                value={dataCadastro.email}
                onChangeText={updateEmail}
                style={styles.input}
                placeholder='Email'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='email'
            />
            <TextInput
                value={dataCadastro.date}
                onChangeText={updateDate}
                style={styles.input}
                placeholder='Data de Nascimento'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='date'
            />
            <TextInput
                value={dataCadastro.telephone}
                onChangeText={updateTelephone}
                style={styles.input}
                placeholder='Telefone'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='telephone'
            />
            <TextInput
                value={dataCadastro.address}
                onChangeText={updateAddress}
                style={styles.input}
                placeholder='Endereço'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='address'
            />
            <TextInput
                value={dataCadastro.cpf}
                onChangeText={updateCpf}
                style={styles.input}
                placeholder='Cpf'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='cpf'
            />
            <TextInput
                value={dataCadastro.password}
                onChangeText={updateGender}
                style={styles.input}
                placeholder='Gênero'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='gender'
            />
            <Button
                style={styles.button}
                title="Cadastrar"
                onPress={() => ("Cadastrar")}
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
        marginBottom: 20,
    },
    button: {
        flex: 1,
        fontSize: 20,
        width: 1300,
        display: 'flex',
    },
});
