import React, {useState, useEffect} from 'react';
import { View, FlatList,ScrollView, Modal, TouchableOpacity, Text, Button, StyleSheet, TextInput , Image } from 'react-native';
import Titulo from '../Titulo';
import ItemListaPitaco from '../ItemListaPitaco';
import Aposta from '../Aposta';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import api from '../../services/api';

import estilo from './estilo';

import USA from './../../assets/bandeiras/USA_128x128.png';
import GALES from './../../assets/bandeiras/Pais_de_Gales_128x128.png';

export default function Pitaco() {

const [visivel, setVisivel ] = useState(false);
const [valor, setValor] = useState({});

const [textCasa, onChangeTextCasa] = React.useState("1");
const [textFora, onChangeTextFora] = React.useState("1");

const [paisCasa, setPaisCasa] =  React.useState("USA");
const [paisFora, setPaisFora] =  React.useState("GALES");

    useEffect(() => {
      const getBarberInfo = async () => {
        var lista = "";
        var res = await api.listapalpite(lista);
        
      var jsonJogos = JSON.parse(res)
          setValor(jsonJogos);
         
      }
      getBarberInfo();
      
    }, []);

  const apostando = (props) =>{
    console.log("Apostando")
    setVisivel(false)
  }

  const abreAposta = () =>{
    console.log("Abre Aposta")
    setVisivel(true)
  }

  return (
    <View>

            <FlatList
            data={valor}
            renderItem={({item}) => 
            
            <ScrollView style={estilo.lista}>
              <TouchableOpacity >
            <ItemListaPitaco placar={item.Codigo} dataInicio={item.DataHora} pais1={item.ImagemTime1} pais2={item.ImagemTime2} imagemTime1={item.ImagemTime1} imagemTime2={item.ImagemTime2} paisCasa="JAPAO" />
            </TouchableOpacity>
          </ScrollView> 
            }
          />       
        
       
        <Modal animationType='slide' transparent={true} visible={visivel} onRequestClose={()=>{}}>
              <View style={estilo.modalWindow}>
                <View style={estilo.modalBody}>
                <View>
        <View style={estilo.Titulo}>                  
        <Text style={estilo.PaisesTopo}> {paisCasa} vs {paisFora} </Text>
        
        <TouchableOpacity  onPress={apostando}>
            <Text style={estilo.corBotaoFechar}>FECHAR</Text>
         </TouchableOpacity>
       
        </View>
        <View style={estilo.doisPaisesAposta}>
        <Image source={USA} style={estilo.imagemCasa} />
       <View>
        <Text style={estilo.seuPitaco} > Seu Pitaco</Text>
          
            <View style={estilo.grupoInputs}>
                <TextInput
                style={estilo.inputCasa}
                onChangeText={onChangeTextCasa}
                value={textCasa}
                keyboardType="numeric"
              />
              <TextInput 
                style={estilo.inputFora}
                onChangeText={onChangeTextFora}
                value={textFora}
                keyboardType="numeric"
              />
            </View>
          <Text style={estilo.vs} > VS</Text>
        </View>
        <Image source={GALES} style={estilo.imagemFora} />
        </View>
        

          <TouchableOpacity style={estilo.botao} onPress={() => {}}>
            <Text style={estilo.corBotao} > ✓    PALPITAR</Text>
         </TouchableOpacity>
        
         <Collapse>
         <CollapseHeader >
              <View style={estilo.bordaCollapse}>
                <Text style={estilo.colapse}>ESTATÍSTICAS GRUPO</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>Ta daa!</Text>
            </CollapseBody>
          </Collapse>
       
        <Collapse >
            <CollapseHeader >
              <View style={estilo.bordaCollapseGeral}>
                <Text  style={estilo.colapse}>ESTATÍSTICAS GERAL</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>Ta daa!</Text>
            </CollapseBody>
        </Collapse>

       
    </View>
                  </View>
              </View>
        </Modal>

      

    
    
    </View>
  )
}

