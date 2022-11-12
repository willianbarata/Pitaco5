import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function Titulo() {
  return (
    <View style={estilo.box}>
      <Text style={estilo.textoGrupo}>Grupo</Text>
      <Text style={estilo.textoData}>Data</Text>
    </View>
  )
}