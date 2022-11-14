import React, {useState, useEffect} from 'react';
import { View, FlatList,ScrollView, Modal, TouchableOpacity, Text, Button, StyleSheet, TextInput , Image } from 'react-native';
import Titulo from '../Titulo';
import ItemListaPitaco from '../ItemListaPitaco';
import Aposta from '../Aposta';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import api from '../../services/api';
import itemLista from '../../componentes/ItemLista'
import estilo from './estilo';

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

export default function Pitaco() {
  

const [ visivel, setVisivel ] = useState(false);
const [valor, setValor] = useState({});
const [jogoCod, setItemCod] = useState({});
const [pais1, setPais1] = useState('')
const [pais2, setPais2] = useState('')
const [ nomePaisCorrigido1, setNomePaisCorrigido1] = useState('')
const [ nomePaisCorrigido2, setNomePaisCorrigido2] = useState('')

const [textCasa, onChangeTextCasa] = React.useState("1");
const [textFora, onChangeTextFora] = React.useState("1");

const [paisCasa, setPaisCasa] =  React.useState("");
const [paisFora, setPaisFora] =  React.useState("");

const [codigoPitaco, seTcodigoPitaco] = useState('');
const [dataPitaco, setData] = useState('');
const [imgTime1, setImgTime1] = useState('');
const [imgTime2, setImgTime2] = useState('');
const [pitacoPais1, setPitacoPais1] = useState('');
const [pitacoPais2, setPitacoPais2] = useState('');


    useEffect(() => {
      const getBarberInfo = async () => {
        var lista = "";
        var res = await api.listapalpite(lista);
        
      var jsonJogos = JSON.parse(res)
          setValor(jsonJogos);
          
         // console.log('------PITACO ANTES-----')
         // console.log(valor)
         // console.log('------PITACO DEPOIS-----')
          //imprimir();
      }
      getBarberInfo();
      
    }, []);

  const apostando = () =>{
    /*seTcodigoPitaco(''),
    setData(''),
    setImgTime1(''),
    setImgTime2(''),
    setPitacoPais1(''),
    setPitacoPais2(''),*/
    //console.log(codigoPitaco, dataPitaco, imgTime1, imgTime2)

    console.log("Apostando")
    setVisivel(false)
  }

  const abreAposta = () =>{
    
    escolherPais1(imgTime1)
    console.log(imgTime1 + 'pais')
    escolherPais2(imgTime2)
    console.log(codigoPitaco, dataPitaco, imgTime1, imgTime2),
    console.log("teste")
    setVisivel(true)
  }

  const palpite = async () => {
    //var resultado = await api.palpitarjogo(textCasa, textFora)
    console.log(textCasa)
    console.log(textFora)
    console.log(jogoCod)
  }

  return (
    <View>
      <Titulo />

    
     
        <FlatList
            data={valor}
            renderItem={({item}) => 
            <ScrollView style={estilo.lista}>
                <TouchableOpacity onPress={() => {
                  console.log('passando parametro')
                  console.log(item.Codigo, item.DataHora, item.ImagemTime1, item.ImagemTime2, item.ImagemTime1, item.ImagemTime2 + 'antes de setar')
                  seTcodigoPitaco(item.Codigo)
                  setData(item.DataHora)
                  setImgTime1(item.ImagemTime1)
                  setImgTime2(item.ImagemTime2)
                  setPitacoPais1(item.ImagemTime1)
                  setPitacoPais2(item.ImagemTime2)
                  console.log(codigoPitaco, dataPitaco, imgTime1, imgTime2 + 'ANTES')
                  abreAposta()  
                }}>
                <ItemListaPitaco placar={item.Codigo} dataInicio={item.DataHora} pais1={item.ImagemTime1} pais2={item.ImagemTime2} imagemTime1={item.ImagemTime1} imagemTime2={item.ImagemTime2}/>
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
        <Image source={pais1} style={estilo.imagemCasa} />
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
          <Text style={estilo.vs} > VS  {codigoPitaco}</Text>
        </View>
        <Image source={pais2} style={estilo.imagemFora} />
        </View>

          <TouchableOpacity style={estilo.botao} onPress={palpite}>
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



  
function escolherPais1(imgPais){

  // console.log(imgPais)
 
  switch (imgPais) {
   case "camaroes.png":
       setPais1(CAMAROES)
       setNomePaisCorrigido1('Camarões')
       break;
   case "brasil.png":
       setPais1(BRASIL)
       setNomePaisCorrigido1('Brasil') 
       break;
   case "gana.png":
       setPais1(GANA)
       setNomePaisCorrigido1('Gana')
       break;
   case "catar.png":
       setPais1(CATAR)
       setNomePaisCorrigido1('Catar')
       break;
   case "senegal.png":
       setPais1(SENEGAL)
       setNomePaisCorrigido1('Senegal')
       break;
   case "estadosunidos.png":
       setPais1(USA)
       setNomePaisCorrigido1('Estados Unidos')
       break;
   case "argentina.png":
       setPais1(ARGENTINA)
       setNomePaisCorrigido1('Argentina')
       break;
   case "dinamarca.png":
       setPais1(DINAMARCA)
       setNomePaisCorrigido1('Dinamarca')
       break;
   case "mexico.png":
       setPais1(MEXICO)
       setNomePaisCorrigido1('México')
       break;
   case "franca.png":
       setPais1(FRANCA)
       setNomePaisCorrigido1('Franca')
       break;
   case "marrocos.png":
       setPais1(MARROCOS)
       setNomePaisCorrigido1('Marrocos')
       break;
   case "alemanha.png":
       setPais1(ALEMANHA)
       setNomePaisCorrigido1('Alemanha')
       break;
   case "espanha.png":
       setPais1(ESPANHA)
       setNomePaisCorrigido1('Espanha')
       break;
   case "belgica.png":
       setPais1(BELGICA)
       setNomePaisCorrigido1('Bélgica')
       break;
   case "suica.png":
       setPais1(SUICA)
       setNomePaisCorrigido1('Suíça')
       break;
   case "uruguai.png":
       setPais1(URUGUAI)
       setNomePaisCorrigido1('Uruguai')
       break;
   case "portugal.png":
       setPais1(PORTUGAL)
       setNomePaisCorrigido1('Portugal')
       break;
   case "paisdegales.png":
       setPais1(GALES)
       setNomePaisCorrigido1('País de Gales')
       break;
   case "holanda.png":
       setPais1(HOLANDA)
       setNomePaisCorrigido1('Holanda')
       break;
   case "inglaterra.png":
       setPais1(INGLATERRA)
       setNomePaisCorrigido1('Inglaterra')
       break;
   case "tunisia.png":
       setPais1(TUNISIA)
       setNomePaisCorrigido1('Tunísia')
       break;
   case "polonia.png":
       setPais1(POLONIA)
       setNomePaisCorrigido1('Polônia')
       break;
   case "japao.png":
       setPais1(JAPAO)
       setNomePaisCorrigido1('Japão')
       break;
   case "croacia.png":
       setPais1(CROACIA)
       setNomePaisCorrigido1('Croácia')
       break;
   case "coreiadosul.png":
       setPais1(COREIA)
       setNomePaisCorrigido1('Coréia')
       break;
   case "equador.png":
       setPais1(EQUADOR)
       setNomePaisCorrigido1('Equador')
       break;
   case "ira.png":
       setPais1(IRA)
       setNomePaisCorrigido1('Irã')
       break;
   case "australia.png":
       setPais1(AUSTRALIA)
       setNomePaisCorrigido1('Austrália')
       break;
   case "arabia_saudita.png":
       setPais1(ARABIA)
       setNomePaisCorrigido1('Arábia Saudita')
       break;
   case "canada.png":
       setPais1(CANADA)
       setNomePaisCorrigido1('Canadá')
       break;
   case "costarica.png":
       setPais1(COSTARICA)
       setNomePaisCorrigido1('Costa Rica')
       break;
   case "servia.png":
       setPais1(SERVIA)
       setNomePaisCorrigido1('Sérvia')
       break;
 }  
 }
 
 function escolherPais2(imgPais){
 
  switch (imgPais) {
    case "camaroes.png":
        setPais2(CAMAROES)
        setNomePaisCorrigido2('Camarões')
        break;
    case "brasil.png":
        setPais2(BRASIL)
        setNomePaisCorrigido2('Brasil') 
        break;
    case "gana.png":
        setPais2(GANA)
        setNomePaisCorrigido2('Gana')
        break;
    case "catar.png":
        setPais2(CATAR)
        setNomePaisCorrigido2('Catar')
        break;
    case "senegal.png":
        setPais2(SENEGAL)
        setNomePaisCorrigido2('Senegal')
        break;
    case "estadosunidos.png":
        setPais2(USA)
        setNomePaisCorrigido2('Estados Unidos')
        break;
    case "argentina.png":
        setPais2(ARGENTINA)
        setNomePaisCorrigido2('Argentina')
        break;
    case "dinamarca.png":
        setPais2(DINAMARCA)
        setNomePaisCorrigido2('Dinamarca')
        break;
    case "mexico.png":
        setPais2(MEXICO)
        setNomePaisCorrigido2('México')
        break;
    case "franca.png":
        setPais2(FRANCA)
        setNomePaisCorrigido2('Franca')
        break;
    case "marrocos.png":
        setPais2(MARROCOS)
        setNomePaisCorrigido2('Marrocos')
        break;
    case "alemanha.png":
        setPais2(ALEMANHA)
        setNomePaisCorrigido2('Alemanha')
        break;
    case "espanha.png":
        setPais2(ESPANHA)
        setNomePaisCorrigido2('Espanha')
        break;
    case "belgica.png":
        setPais2(BELGICA)
        setNomePaisCorrigido2('Bélgica')
        break;
    case "suica.png":
        setPais2(SUICA)
        setNomePaisCorrigido2('Suíça')
        break;
    case "uruguai.png":
        setPais2(URUGUAI)
        setNomePaisCorrigido2('Uruguai')
        break;
    case "portugal.png":
        setPais2(PORTUGAL)
        setNomePaisCorrigido2('Portugal')
        break;
    case "paisdegales.png":
        setPais2(GALES)
        setNomePaisCorrigido2('País de Gales')
        break;
    case "holanda.png":
        setPais2(HOLANDA)
        setNomePaisCorrigido2('Holanda')
        break;
    case "inglaterra.png":
        setPais2(INGLATERRA)
        setNomePaisCorrigido2('Inglaterra')
        break;
    case "tunisia.png":
        setPais2(TUNISIA)
        setNomePaisCorrigido2('Tunísia')
        break;
    case "polonia.png":
        setPais2(POLONIA)
        setNomePaisCorrigido2('Polônia')
        break;
    case "japao.png":
        setPais2(JAPAO)
        setNomePaisCorrigido2('Japão')
        break;
    case "croacia.png":
        setPais2(CROACIA)
        setNomePaisCorrigido2('Croácia')
        break;
    case "coreiadosul.png":
        setPais2(COREIA)
        setNomePaisCorrigido2('Coréia')
        break;
    case "equador.png":
        setPais2(EQUADOR)
        setNomePaisCorrigido2('Equador')
        break;
    case "ira.png":
        setPais2(IRA)
        setNomePaisCorrigido2('Irã')
        break;
    case "australia.png":
        setPais2(AUSTRALIA)
        setNomePaisCorrigido2('Austrália')
        break;
    case "arabia_saudita.png":
        setPais2(ARABIA)
        setNomePaisCorrigido2('Arábia Saudita')
        break;
    case "canada.png":
        setPais2(CANADA)
        setNomePaisCorrigido2('Canadá')
        break;
    case "costarica.png":
        setPais2(COSTARICA)
        setNomePaisCorrigido2('Costa Rica')
        break;
    case "servia.png":
        setPais2(SERVIA)
        setNomePaisCorrigido2('Sérvia')
        break;
  }  
  }

}


 