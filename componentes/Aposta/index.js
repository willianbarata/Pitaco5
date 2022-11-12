import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';


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
 
export default function Aposta(props) {
  
  const [textCasa, onChangeTextCasa] = React.useState("1");
  const [textFora, onChangeTextFora] = React.useState("1");
  
  const apostando = (props) =>{
    console.log("Apostando")
    props.finalizar
  }


  return (
    <View>
        <Text> Tela de Aposta</Text>
        
        <View style={estilo.grupoInputs}>
            <TextInput
            style={estilo.inputCasa}
            onChangeText={onChangeTextCasa}
            value={textCasa}
          />
           <TextInput 
            style={estilo.inputFora}
            onChangeText={onChangeTextFora}
            value={textFora}
          />
        </View>

        <Button title='sair' onPress={apostando} />
    </View>
  )
}

const estilo = StyleSheet.create({
  inputCasa:{
    width: 90,
    height: 60,
    borderWidth: 1,
    borderColor: "#000"
  },
  inputFora:{
    width: 90,
    height: 60,
    borderWidth: 1,
    borderColor: "#000",
    marginLeft: 30
  },
  grupoInputs:{
    marginTop: 70,
    marginLeft: 40,
    flexDirection: 'row'
  }
 });