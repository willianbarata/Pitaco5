import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,FlatList } from 'react-native';
import { FontAwesome, FontAwesome5  } from '@expo/vector-icons'; 
import Titulo from '../Titulo';
import ItemListaClassificacao from '../ItemListaClassificacao';

import api from '../../services/api';

export default function Classificacao() {

  const [ valor, setValor ] = useState({})

  useEffect(() => {

    var corOuro = "#f6c822"
    var corPrata = "#c7c5c4"
    var corBronze = "#945324"

    const getBarberInfo = async () => {
      var lista = "";
      var email = '';
      var senha = '';
      var res = await api.listarclassificacao(email, senha);
      
   
         var jsonJogos = JSON.parse(res)
         console.log('---------- Tela Classificação DEPOIS')
      //  console.log(jsonJogos)
        console.log(jsonJogos["children"])
        console.log(jsonJogos.children)
        setValor(jsonJogos["children"]);
    }
    getBarberInfo();
    
  }, []);


  return (
   
   
    <View >
      <Text> Teste</Text>
    <FlatList
      data={valor}
      renderItem={({item}) => 
      
      <ScrollView style={estilo.lista}>
        
        <View style={estilo.Lista}> 
            <View style={estilo.Direction}>
                
                {/* <FontAwesome5 name="medal" size={24} color={'orange'} /> */}
                
                <FontAwesome style={estilo.item} name="user" size={24} color="black" />
                <Text style={estilo.item}> {item.attributes.Posicao} º </Text>
                <Text style={estilo.flexa}> {item.attributes.Usuario} </Text>
            </View>
            <Text style={estilo.pontos}>Pontos: {item.attributes.Pontos}</Text>
            
        </View>
    </ScrollView> 
      }
    />
  </View>
 
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
  },
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 16,
     height: 44,
     marginLeft: '7%'
   },
   pontos:{
       fontSize: 15,
       marginTop: -13,
       marginLeft: '25%',
       marginBottom: '2%'
   },
   Lista:{
       
       marginBottom: '1%',
       marginTop: '1%',
       borderBottomWidth: 0.2,
       borderEndColor: '#e6e6e6'
   },
   flexa:{
       textAlign: 'right',

   },
   Direction:{
       flexDirection: 'row'
   }
});
