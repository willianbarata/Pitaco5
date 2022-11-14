import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,ScrollView } from 'react-native';

import Titulo from '../Titulo';
import ItemListaClassificacao from '../ItemListaClassificacao';

export default function Tabela() {

  return (
    <ScrollView style={estilo.lista}>
    <ItemListaClassificacao placar="2 x 2" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="JAPAO" />
    
    
  </ScrollView> 
  )
}

const estilo = StyleSheet.create({
  botaoSuperiorEsquerdo: {
    backgroundColor: 'black',
    width: '50%',
    height: 50
  },
  botaoSuperiorDireito:{
    backgroundColor: 'black',
    width: '50%',
    height: 50
  },
  grupoBotoesSuperiores:{
    flexDirection: 'row'
  },
  box:{
    padding: 10,
    marginBottom: 10,
    borderBottomColor: 1,
    alignItems: 'center'
  },
  placar: {
    fontSize: 18,
    marginBottom: 5,
    alignItems: 'center'
  },
  dataInicio:{
    color: 'gray'
  },
  paises:{
    color: 'gray'
  },
  imgPaisCasa:{
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 90
  },
  imgPaisFora:{
    width: 30,
    height: 30,
    borderRadius: 30,
    marginLeft: 90
  },
  blocoPlacar:{
    flexDirection: 'row',
  }
});
