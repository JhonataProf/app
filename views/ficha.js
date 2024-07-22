import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, TextInput, View, Image, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from 'expo-router';

export default function AnamneseScreen({ navigation }) {
  const [dataAnamnese, setDataAnamnese] = React.useState({
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

  function updateField(name, value) {
    setDataAnamnese({
      ...dataAnamnese,
      [name]: value,
    });
  }

  async function logar() {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const raw = JSON.stringify(dataAnamnese);
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };
      const resp = await fetch('http://172.21.17.100:3000/anamnese', requestOptions);
      const bodyResp = await resp.json();
      const token = bodyResp.token;
      SecureStore.setItemAsync('bearer', token);
      navigation.navigate('Home');
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Image width={100} height={200} style={{ flex: 1, resizeMode: 'contain' }} source={LogoSenac} />
      <Text style={styles.title}>Anamnese</Text>
      <TextInput
        value={dataAnamnese.numero}
        onChangeText={(value) => updateField('numero', value)}
        style={styles.input}
        placeholder='Número'
      />
      <TextInput
        value={dataAnamnese.nome}
        onChangeText={(value) => updateField('nome', value)}
        style={styles.input}
        placeholder='Nome'
      />
      <TextInput
        value={dataAnamnese.endereco}
        onChangeText={(value) => updateField('endereco', value)}
        style={styles.input}
        placeholder='Endereço'
      />
      <TextInput
        value={dataAnamnese.num}
        onChangeText={(value) => updateField('num', value)}
        style={styles.input}
        placeholder='N.º'
      />
      <TextInput
        value={dataAnamnese.cidade}
        onChangeText={(value) => updateField('cidade', value)}
        style={styles.input}
        placeholder='Cidade'
      />
      <TextInput
        value={dataAnamnese.cep}
        onChangeText={(value) => updateField('cep', value)}
        style={styles.input}
        placeholder='CEP'
      />
      <TextInput
        value={dataAnamnese.dataNascimento}
        onChangeText={(value) => updateField('dataNascimento', value)}
        style={styles.input}
        placeholder='Data de Nascimento'
      />
      <TextInput
        value={dataAnamnese.estadoCivil.solteiro ? 'Solteiro' : dataAnamnese.estadoCivil.casado ? 'Casado' : dataAnamnese.estadoCivil.viuvo ? 'Viúvo' : dataAnamnese.estadoCivil.demasiado ? 'Demasiado' : ''}
        onChangeText={(value) => updateField('estadoCivil', { ...dataAnamnese.estadoCivil, solteiro: value === 'Solteiro', casado: value === 'Casado', viuvo: value === 'Viúvo', demasiado: value === 'Demasiado' })}
        style={styles.input}
        placeholder='Estado Civil'
      />
      <TextInput
        value={dataAnamnese.telefone}
        onChangeText={(value) => updateField('telefone', value)}
        style={styles.input}
        placeholder='Telefone'
      />
      <TextInput
        value={dataAnamnese.telefoneRecado}
        onChangeText={(value) => updateField('telefoneRecado', value)}
        style={styles.input}
        placeholder='Telefone para Recado'
      />
      <TextInput
        value={dataAnamnese.profissao}
        onChangeText={(value) => updateField('profissao', value)}
        style={styles.input}
        placeholder='Profissão'
      />
      <TextInput
        value={dataAnamnese.posicaoTrabalho.emPe ? 'Em Pé' : dataAnamnese.posicaoTrabalho.sentado ? 'Sentado' : dataAnamnese.posicaoTrabalho.andando ? 'Andando' : ''}
        onChangeText={(value) => updateField('posicaoTrabalho', { ...dataAnamnese.posicaoTrabalho, emPe: value === 'Em Pé', sentado: value === 'Sentado', andando: value === 'Andando' })}
        style={styles.input}
        placeholder='Posição de Trabalho'
      />
      <TextInput
        value={dataAnamnese.estilista.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('estilista', { ...dataAnamnese.estilista, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Estilista'
      />
      <TextInput
        value={dataAnamnese.estilista.tempo}
        onChangeText={(value) => updateField('estilista', { ...dataAnamnese.estilista, tempo: value })}
        style={styles.input}
        placeholder='Tempo de Estilista'
      />
      <TextInput
        value={dataAnamnese.tabagista.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('tabagista', { ...dataAnamnese.tabagista, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Tabagista'
      />
      <TextInput
        value={dataAnamnese.tabagista.tempo}
        onChangeText={(value) => updateField('tabagista', { ...dataAnamnese.tabagista, tempo: value })}
        style={styles.input}
        placeholder='Tempo de Tabagismo'
      />
      <TextInput
        value={dataAnamnese.tipoCalcado.aberto ? 'Aberto' : 'Fechado'}
        onChangeText={(value) => updateField('tipoCalcado', { ...dataAnamnese.tipoCalcado, aberto: value === 'Aberto', fechado: value === 'Fechado' })}
        style={styles.input}
        placeholder='Tipo de Calçado'
      />
      <TextInput
        value={dataAnamnese.tipoCalcado.numero}
        onChangeText={(value) => updateField('tipoCalcado', { ...dataAnamnese.tipoCalcado, numero: value })}
        style={styles.input}
        placeholder='Número do Calçado'
      />
      <TextInput
        value={dataAnamnese.tipoMeia.social ? 'Social' : dataAnamnese.tipoMeia.esportiva ? 'Esportiva' : dataAnamnese.tipoMeia.algodao ? 'Algodão' : ''}
        onChangeText={(value) => updateField('tipoMeia', { ...dataAnamnese.tipoMeia, social: value === 'Social', esportiva: value === 'Esportiva', algodao: value === 'Algodão' })}
        style={styles.input}
        placeholder='Tipo de Meia'
      />
      <TextInput
        value={dataAnamnese.praticaEsporte.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('praticaEsporte', { ...dataAnamnese.praticaEsporte, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Pratica Esporte'
      />
      <TextInput
        value={dataAnamnese.praticaEsporte.qual}
        onChangeText={(value) => updateField('praticaEsporte', { ...dataAnamnese.praticaEsporte, qual: value })}
        style={styles.input}
        placeholder='Qual esporte'
      />
      <TextInput
        value={dataAnamnese.habitosAlimentares}
        onChangeText={(value) => updateField('habitosAlimentares', value)}
        style={styles.input}
        placeholder='Hábitos Alimentares'
      />
      <TextInput
        value={dataAnamnese.medicamentos.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('medicamentos', { ...dataAnamnese.medicamentos, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Usa Medicamentos'
      />
      <TextInput
        value={dataAnamnese.medicamentos.quais}
        onChangeText={(value) => updateField('medicamentos', { ...dataAnamnese.medicamentos, quais: value })}
        style={styles.input}
        placeholder='Quais Medicamentos'
      />
      <TextInput
        value={dataAnamnese.estatura}
        onChangeText={(value) => updateField('estatura', value)}
        style={styles.input}
        placeholder='Estatura'
      />
      <TextInput
        value={dataAnamnese.peso}
        onChangeText={(value) => updateField('peso', value)}
        style={styles.input}
        placeholder='Peso'
      />
      <TextInput
        value={dataAnamnese.pa}
        onChangeText={(value) => updateField('pa', value)}
        style={styles.input}
        placeholder='PA'
      />
      <TextInput
        value={dataAnamnese.glicemia}
        onChangeText={(value) => updateField('glicemia', value)}
        style={styles.input}
        placeholder='Glicemia'
      />
      <TextInput
        value={dataAnamnese.tipagemSanguinea}
        onChangeText={(value) => updateField('tipagemSanguinea', value)}
        style={styles.input}
        placeholder='Tipagem Sanguínea'
      />
      <TextInput
        value={dataAnamnese.doencasPreExistentes.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('doencasPreExistentes', { ...dataAnamnese.doencasPreExistentes, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Doenças Preexistentes'
      />
      <TextInput
        value={dataAnamnese.doencasPreExistentes.quais}
        onChangeText={(value) => updateField('doencasPreExistentes', { ...dataAnamnese.doencasPreExistentes, quais: value })}
        style={styles.input}
        placeholder='Quais Doenças'
      />
      <TextInput
        value={dataAnamnese.tratamentoPodologico.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('tratamentoPodologico', { ...dataAnamnese.tratamentoPodologico, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Tratamento Podológico'
      />
      <TextInput
        value={dataAnamnese.tratamentoPodologico.quais}
        onChangeText={(value) => updateField('tratamentoPodologico', { ...dataAnamnese.tratamentoPodologico, quais: value })}
        style={styles.input}
        placeholder='Quais Tratamentos'
      />
      <TextInput
        value={dataAnamnese.cirurgiaMembrosInferiores.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('cirurgiaMembrosInferiores', { ...dataAnamnese.cirurgiaMembrosInferiores, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Cirurgia Membros Inferiores'
      />
      <TextInput
        value={dataAnamnese.cirurgiaMembrosInferiores.quais}
        onChangeText={(value) => updateField('cirurgiaMembrosInferiores', { ...dataAnamnese.cirurgiaMembrosInferiores, quais: value })}
        style={styles.input}
        placeholder='Quais Cirurgias'
      />
      <TextInput
        value={dataAnamnese.alergia.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('alergia', { ...dataAnamnese.alergia, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Alergias'
      />
      <TextInput
        value={dataAnamnese.alergia.quais}
        onChangeText={(value) => updateField('alergia', { ...dataAnamnese.alergia, quais: value })}
        style={styles.input}
        placeholder='Quais Alergias'
      />
      <TextInput
        value={dataAnamnese.gestante.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('gestante', { ...dataAnamnese.gestante, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Gestante'
      />
      <TextInput
        value={dataAnamnese.lactante.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('lactante', { ...dataAnamnese.lactante, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Lactante'
      />
      <TextInput
        value={dataAnamnese.varizes.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('varizes', { ...dataAnamnese.varizes, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Varizes'
      />
      <TextInput
        value={dataAnamnese.amputacoes.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('amputacoes', { ...dataAnamnese.amputacoes, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Amputações'
      />
      <TextInput
        value={dataAnamnese.amputacoes.quais}
        onChangeText={(value) => updateField('amputacoes', { ...dataAnamnese.amputacoes, quais: value })}
        style={styles.input}
        placeholder='Quais Amputações'
      />
      <TextInput
        value={dataAnamnese.dor}
        onChangeText={(value) => updateField('dor', value)}
        style={styles.input}
        placeholder='Dor'
      />
      <TextInput
        value={dataAnamnese.pinosMarcapasso.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('pinosMarcapasso', { ...dataAnamnese.pinosMarcapasso, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Pinos ou Marcapasso'
      />
      <TextInput
        value={dataAnamnese.pinosMarcapasso.quais}
        onChangeText={(value) => updateField('pinosMarcapasso', { ...dataAnamnese.pinosMarcapasso, quais: value })}
        style={styles.input}
        placeholder='Quais Pinos ou Marcapasso'
      />
      <TextInput
        value={dataAnamnese.perfusao.pd}
        onChangeText={(value) => updateField('perfusao', { ...dataAnamnese.perfusao, pd: value })}
        style={styles.input}
        placeholder='Perfusão PD'
      />
      <TextInput
        value={dataAnamnese.perfusao.pe}
        onChangeText={(value) => updateField('perfusao', { ...dataAnamnese.perfusao, pe: value })}
        style={styles.input}
        placeholder='Perfusão PE'
      />
      <TextInput
        value={dataAnamnese.digitoPressao.pd}
        onChangeText={(value) => updateField('digitoPressao', { ...dataAnamnese.digitoPressao, pd: value })}
        style={styles.input}
        placeholder='Dígito Pressão PD'
      />
      <TextInput
        value={dataAnamnese.digitoPressao.pe}
        onChangeText={(value) => updateField('digitoPressao', { ...dataAnamnese.digitoPressao, pe: value })}
        style={styles.input}
        placeholder='Dígito Pressão PE'
      />
      <TextInput
        value={dataAnamnese.formatoUnhas.pd}
        onChangeText={(value) => updateField('formatoUnhas', { ...dataAnamnese.formatoUnhas, pd: value })}
        style={styles.input}
        placeholder='Formato das Unhas PD'
      />
      <TextInput
        value={dataAnamnese.formatoUnhas.pe}
        onChangeText={(value) => updateField('formatoUnhas', { ...dataAnamnese.formatoUnhas, pe: value })}
        style={styles.input}
        placeholder='Formato das Unhas PE'
      />
      <TextInput
        value={dataAnamnese.formatoPes.pd}
        onChangeText={(value) => updateField('formatoPes', { ...dataAnamnese.formatoPes, pd: value })}
        style={styles.input}
        placeholder='Formato dos Pés PD'
      />
      <TextInput
        value={dataAnamnese.formatoPes.pe}
        onChangeText={(value) => updateField('formatoPes', { ...dataAnamnese.formatoPes, pe: value })}
        style={styles.input}
        placeholder='Formato dos Pés PE'
      />
      <TextInput
        value={dataAnamnese.testeMonofilamento.pd.cs ? 'CS' : 'SS'}
        onChangeText={(value) => updateField('testeMonofilamento', { ...dataAnamnese.testeMonofilamento, pd: { cs: value === 'CS', ss: value === 'SS' } })}
        style={styles.input}
        placeholder='Teste Monofilamento PD'
      />
      <TextInput
        value={dataAnamnese.testeMonofilamento.pe.cs ? 'CS' : 'SS'}
        onChangeText={(value) => updateField('testeMonofilamento', { ...dataAnamnese.testeMonofilamento, pe: { cs: value === 'CS', ss: value === 'SS' } })}
        style={styles.input}
        placeholder='Teste Monofilamento PE'
      />
      <Button
        style={styles.button}
        title="Logar"
        onPress={() => logar()}
      />
    </ScrollView>
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
