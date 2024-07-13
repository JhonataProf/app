import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, View, Image } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

export default function FichaScreen({ navigation }) {
  const [dataAnamense, setDataAnamense] = React.useState({
    numero: '',
    nome: '',
    endereco: '',
    num: '',
    cidade: '',
    cep: '',
    dataNascimento: '',
    estadoCivil: {
      solteiro: false,
      casado: false,
      viuvo: false,
      demasiado: false,
    },
    telefone: '',
    telefoneRecado: '',
    profissao: '',
    posicaoTrabalho: {
      emPe: false,
      sentado: false,
      andando: false,
    },
    estilista: {
      sim: false,
      nao: false,
      tempo: '',
    },
    tabagista: {
      sim: false,
      nao: false,
      tempo: '',
    },
    tipoCalcado: {
      aberto: false,
      fechado: false,
      numero: '',
    },
    tipoMeia: {
      social: false,
      esportiva: false,
      algodao: false,
    },
    praticaEsporte: {
      sim: false,
      nao: false,
      qual: '',
    },
    habitosAlimentares: '',
    medicamentos: {
      sim: false,
      nao: false,
      quais: '',
    },
    estatura: '',
    peso: '',
    pa: '',
    glicemia: '',
    tipagemSanguinea: '',
    doencasPreExistentes: {
      sim: false,
      nao: false,
      quais: '',
    },
    tratamentoPodologico: {
      sim: false,
      nao: false,
      quais: '',
    },
    cirurgiaMembrosInferiores: {
      sim: false,
      nao: false,
      quais: '',
    },
    alergia: {
      sim: false,
      nao: false,
      quais: '',
    },
    gestante: {
      sim: false,
      nao: false,
    },
    lactante: {
      sim: false,
      nao: false,
    },
    varizes: {
      sim: false,
      nao: false,
    },
    amputacoes: {
      sim: false,
      nao: false,
      quais: '',
    },
    dor: '',
    pinosMarcapasso: {
      sim: false,
      nao: false,
      quais: '',
    },
    perfusao: {
      pd: '',
      pe: '',
    },
    digitoPressao: {
      pd: '',
      pe: '',
    },
    formatoUnhas: {
      pd: '',
      pe: '',
    },
    formatoPes: {
      pd: '',
      pe: '',
    },
    testeMonofilamento: {
      pd: { cs: false, ss: false },
      pe: { cs: false, ss: false },
    },
  });

  async function anamense() {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const raw = JSON.stringify(dataConsulta);
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
      navigation.navigate('Consulta');
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
      <Text style={styles.title}>Consulta</Text>
      <Button
        style={styles.button}
        title="Ficha de Anamnese"
        onPress={() => anamense()}
      />
      <Button
        style={styles.button}
        title="Ficha N.º"
        onPress={() => anamense()}
      />
      <Button
        style={styles.button}
        title="Nome"
        onPress={() => anamense()}
      />
      <Button
        style={styles.button}
        title="Endereço"
        onPress={() => anamense()}
      />
      <Button
        style={styles.button}
        title="Cep"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Data de Nascimento"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Estado Civil"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Telefone"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Telefone para recado"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Profissão"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Posição em qual trabalha:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Estilista?"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Há quanto tempo? "
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Tabagista?"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Há quanto tempo?"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Tipo de calçado que faz mais uso:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="N.º do calçado:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Tipo de meia que faz mais uso:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Pratica algum esporte?"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Habitos alimentares:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Toma algum medicamento de uso contínuo?"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Quais?"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Estatura:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Peso:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="P.A"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Glicemina:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Tipagem sanguínea:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Doenças pré-existentes:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Quais?"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Já fez algum tratamento podológico:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Quais?"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Já fez algum cirurgia nos membros inferiores:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Quais?"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Possui alguma alergia:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Quais?"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Gestante:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Lactante:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Varizes:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Amputações:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Quais?"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Lactante:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Especificando sua dor de 1 a 10:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Portador de pinos ou marcapasso:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Perfusão:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Digito de pressão"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Formato das unhas:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Formato dos pés:"
        onPress={() => anamense()}
      />
        <Button
        style={styles.button}
        title="Teste com monofila mento:"
        onPress={() => anamense()}
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