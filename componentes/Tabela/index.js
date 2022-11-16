import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo.js';
import api from '../../services/api';


import {  FontAwesome } from '@expo/vector-icons';

export default function Tabela() {

  const [valor, setValor] = useState({})

  useEffect(() => {
      const getBarberInfo = async () => {
        var lista = "";
        var res = await api.listarjogos(lista);
        
       var jsonJogos = JSON.parse(res)
       
          setValor(jsonJogos);
          
          console.log('-------- Renderizando Tabela -----------------')
          console.log(jsonJogos)
          
          //imprimir();
      }
      getBarberInfo();
      
    }, []);

  return (
    <View >
    <FlatList
      data={valor}
      renderItem={({item}) => 
      
      <ScrollView style={estilo.lista}>
      <ItemLista placar={item.placar} 
              dataInicio={item.DataHora} 
              Time1={item.Time1} 
              Time2={item.Time2} 
              GolTime1={item.GolsTime1 ?? '-'} 
              GolTime2={item.GolsTime2 ?? '-'} 
              imagemTime1={item.ImagemTime1} imagemTime2={item.ImagemTime2} paisCasa="JAPAO" />
      
    </ScrollView> 
      }
    />
  </View>
  
	
  )
}