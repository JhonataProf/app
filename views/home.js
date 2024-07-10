import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, View, Image } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [dataInicio, setDataInicio] = React.useState({
    inicio: '',
    agendamentos: '',
    paciente: '',
    perfil: '',
    profissional: '',
  });

  async function inicio() {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const raw = JSON.stringify(dataInicio);
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };
      const resp = await fetch(
        'http://172.21.17.100:3000/Home',
        requestOptions
      );
      const bodyResp = await resp.json();
      const token = bodyResp.token;
      SecureStore.setItem('bearer', token);
      navigation.navigate('Inicio');
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        width={100}
        height={200}
        style={{ flex: 1, objectFit: 'contain' }}
        source={LogoSenac}
      />
      <Text style={styles.title}>Home</Text>
      <Button
        style={styles.button}
        title="Início"
        onPress={() => inicio()}
      />
      <Button
        style={styles.button}
        title="Agendamentos"
        onPress={() => inicio()}
      />
      <Button
        style={styles.button}
        title="Paciente"
        onPress={() => inicio()}
      />
      <Button
        style={styles.button}
        title="Perfil"
        onPress={() => inicio()}
      />
      <Button
        style={styles.button}
        title="Profissional"
        onPress={() => inicio()}
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
    marginBottom: 20,
  },
  button: {
    flex: 1,
    fontSize: 20,
    width: '100%',
    marginVertical: 10,
  },
});
