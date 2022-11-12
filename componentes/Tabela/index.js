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
          
          console.log('-----------')
          console.log(valor)
          //imprimir();
      }
      getBarberInfo();
      
    }, []);



  /*   const renderItem = ({ item, index }) => (
     
          {item.map((employee, index) => {
        return (
          <View>
            <Text>name: {employee.Codigo}</Text>
            <Text>country: {employee.Time1}</Text>
            </View>
        );

        });     
    ); */

  return (
 /*    <View>
      <Titulo />

      <ScrollView style={estilo.lista}>
        <ItemLista placar={valor[0]} dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="JAPAO" />
      </ScrollView> 
    </View>
 */

    <View >
    <FlatList
      data={valor}
      renderItem={({item}) => 
      
      <ScrollView style={estilo.lista}>
      <ItemLista placar={item.Codigo} dataInicio={item.DataHora} pais1={item.ImagemTime1} pais2={item.ImagemTime2} imagemTime1={item.ImagemTime1} imagemTime2={item.ImagemTime2} paisCasa="JAPAO" />
    </ScrollView> 
      }
    />
  </View>
  
	
  )
}