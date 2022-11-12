import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import { FontAwesome, FontAwesome5  } from '@expo/vector-icons'; 

import api from '../../services/api';

import USA from './../../assets/bandeiras/USA_128x128.png';
import GALES from './../../assets/bandeiras/Pais_de_Gales_128x128.png';

import ALEMANHA   from './../../assets/bandeiras/Alemanha_128x128.png';
import ARABIA     from './../../assets/bandeiras/Arabia_Saudita_128x128.png';
import ARGENTINA  from './../../assets/bandeiras/Argentina_128x128.png';
import AUSTRALIA  from './../../assets/bandeiras/Australia_128x128.png';
import BELGICA    from './../../assets/bandeiras/Belgica_128x128.png';
import BRASIL     from './../../assets/bandeiras/Brasil_128x128.png';
import CAMAROES   from './../../assets/bandeiras/Camaroes_128x128.png';
import CANADA     from './../../assets/bandeiras/Canada_128x128.png';
import CATAR      from './../../assets/bandeiras/Catar_128x128.png';
import COREIA     from './../../assets/bandeiras/Coreia_do_Sul_128x128.png';
import COSTARICA  from './../../assets/bandeiras/Costa_Rica_128x128.png';
import CROACIA    from './../../assets/bandeiras/Croacia_128x128.png';
import DINAMARCA  from './../../assets/bandeiras/Dinamarca_128x128.png';
import EQUADOR    from './../../assets/bandeiras/Equador_128x128.png';
import ESPANHA    from './../../assets/bandeiras/Espanha_128x128.png';
import FRANCA     from './../../assets/bandeiras/Franca_128x128.png';
import GANA       from './../../assets/bandeiras/Gana_128x128.png';
import HOLANDA    from './../../assets/bandeiras/Holanda_128x128.png';
import INGLATERRA from './../../assets/bandeiras/Inglaterra_128x128.png';
import IRA        from './../../assets/bandeiras/Ira_128x128.png';
import JAPAO      from './../../assets/bandeiras/Japao_128x128.png';
import MARROCOS   from './../../assets/bandeiras/Marrocos_128x128.png';
import MEXICO     from './../../assets/bandeiras/Mexico_128x128.png';
import POLONIA    from './../../assets/bandeiras/Polonia_128x128.png';
import PORTUGAL   from './../../assets/bandeiras/Portugal_128x128.png';
import SENEGAL    from './../../assets/bandeiras/Senegal_128x128.png';
import SERVIA     from './../../assets/bandeiras/Servia_128x128.png';
import SUICA      from './../../assets/bandeiras/Suica_128x128.png';
import TUNISIA    from './../../assets/bandeiras/Tunisia_128x128.png';
import URUGUAI    from './../../assets/bandeiras/Uruguai_128x128.png';
 


export default function ItemListaClassificacao(props) {
  
  useEffect(() => {
      
    var corOuro = "#f6c822"
    var corPrata = "#c7c5c4"
    var corBronze = "#945324"

    console.log("---- Tela ITEM LISTA PITACO ----")
    console.log(props)
    // console.log(props.imagemTime1)
    /*  escolherPais1(props.imagemTime1)
     escolherPais2(props.imagemTime2)
     Moment.locale();
     diaSemana(Moment(props.dataInicio).format('dddd'))
     formatandoData(Moment(props.dataInicio).format('L'))
     formatandoHora(Moment(props.dataInicio).format('LT'))
     
   console.log() */

   }, []);

  return (
    <FlatList
      data={[
        {key: 'Devin Devin Devin', posicao: '1'},
        {key: 'Dan Dominic Dominic' , posicao: '2'},
        {key: 'Dominic Dominic Dominic', posicao: '3'},
        {key: 'Jackson Dominic Dominic', posicao: '4'},
        {key: 'James Dominic', posicao: '5'},
        {key: 'Joel Dominic', posicao: '6'},
        {key: 'John Dominic', posicao: '7'},
        {key: 'Jillian Dominic', posicao: '8'},
        {key: 'Jimmy Dominic Dominic', posicao: '9'},
        {key: 'Julie Dominic Dominic', posicao: '10'},
      ]}
      renderItem={({item}) => 
        
      <TouchableOpacity onPress={()=>{}}>
        <View style={estilo.Lista}> 
            <View style={estilo.Direction}>
                
                {/* <FontAwesome5 name="medal" size={24} color={'orange'} /> */}
                
                <FontAwesome style={estilo.item} name="user" size={24} color="black" />
                <Text style={estilo.item}> {item.posicao} º - {item.key}</Text>
                <Text style={estilo.flexa}>  </Text>
            </View>
            <Text style={estilo.pontos}>Pontos: 0</Text>
            
        </View>
        
        </TouchableOpacity>
    }
    />
  )
}

const estilo = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 19,
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
        textAlign: 'right'
    },
    Direction:{
        flexDirection: 'row'
    }
  });