import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,Image, StyleSheet, ScrollView, FlatList, Modal } from 'react-native';
import Titulo from '../Titulo';
import ItemListaClassificacao from '../ItemListaClassificacao';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';


import banner from '../../assets/banners/bannerErp.png';
import api from '../../services/api';

export default function Classificacao() {

  const [valor, setValor] = useState({})
  const [visivel, setVisivel] = useState(false);
  const [equipe, setEquipe] = useState('')
  const [pontos, setPontos] = useState('')
  const [jogos, setJogos] = useState('')
  const [placarCheio, setPlacarCheio] = useState('')
  const [acertoResultados, setAcertoResultados] = useState('')
  const [placarVencedor, setPlacarVencedor] = useState('')
  const [placarPerdedor, setPlacarPerdedor] = useState('')
  const [diferencaGols, setDiferencaGols] = useState('')
  const [tempoAntecipado, setTempoAntecipado] = useState('')
  const [minhaPosicao, setMinhaPosicao] = useState('')
  const [usuario, setUsuario] = useState('')
  const [posicao, setPosicao]= useState('')
  
  const abreDados = () => {

    console.log("Abre Aposta")

    setVisivel(true)
  }

  const fechar = () => {
    setVisivel(false)
    console.log("fechando")
  }

  const primeiro = () =>{

  }

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
      
      setValor(jsonJogos["children"]);
      var usuario = jsonJogos["attributes"]
    
      setMinhaPosicao(usuario.PosicaoUsuario)


      

    }
    getBarberInfo();

  }, []);


  return (


    <View >

  <Image
          style={estilo.banner}
          source={banner}
        />

<Text style={estilo.minhaPosicaoEstilo}> Você está em <Text style={{fontWeight: 'bold'}}>{minhaPosicao}</Text> º lugar.</Text>

      <FlatList
        data={valor}
        renderItem={({ item }) =>

          <ScrollView style={estilo.lista}>

            <View>
              <TouchableOpacity onPress={() => {


                console.log(item.attributes.Equipe.toString())
                setEquipe(item.attributes.Equipe.toString())
                setPosicao(item.attributes.Posicao)  
                setUsuario(item.attributes.Usuario)
                setPontos(item.attributes.Pontos)
                setJogos(item.attributes.Jogos)
                setPlacarCheio(item.attributes.PlacarCheio)
                setAcertoResultados(item.attributes.AcertoResultados)
                setPlacarVencedor(item.attributes.PlacarVencedor)
                setPlacarPerdedor(item.attributes.PlacarPerdedor)
                setDiferencaGols(item.attributes.DiferencaGols)
                setTempoAntecipado(item.attributes.TempoAntecipado)



                abreDados()
              }}>
                <View style={estilo.Direction}>

                  {/* <FontAwesome5 name="medal" size={24} color={'orange'} /> */}

                  { item.attributes.Posicao == 1 && 
                    <FontAwesome5  style={estilo.item} name="medal" size={24} color={'#f6c822'} />
                  }
                  { item.attributes.Posicao == 2 && 
                    <FontAwesome5  style={estilo.item} name="medal" size={24} color={'#c7c5c4'} />
                  }
                  { item.attributes.Posicao == 3 && 
                    <FontAwesome5  style={estilo.item} name="medal" size={24} color={'#945324'} />
                  }
                  { item.attributes.Posicao > 3 && 
                     <FontAwesome style={estilo.item} name="user" size={24} color="black" />
                  }

                      
                 
                  <Text style={estilo.itemParticipante}> {item.attributes.Posicao} º - {item.attributes.Usuario} </Text>
                  <View style={estilo.blocoSeta}>
                    <AntDesign style={estilo.seta} name="right" size={14} color="gray" />
                  </View>
                </View>
                <Text style={estilo.pontos}>Pontos: {item.attributes.Pontos}</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        }
      />



      <Modal animationType='slide' transparent={true} visible={visivel} onRequestClose={() => { }}>
        <View style={estilo.modalWindow}>
          <View style={estilo.modalBody}>
            <View>

              <View style={estilo.Titulo}>
              <Text style={estilo.nomeUsuario}> {posicao} - {usuario} </Text> 
                <Text style={estilo.PaisesTopo}> </Text>

              <View style={estilo.viewBotaoFechar}>
                <TouchableOpacity onPress={fechar}>
                  <Text style={estilo.botaoFechar} >FECHAR</Text>
                </TouchableOpacity>
                </View>
              </View>
              <ScrollView>
              <View>

                <Text style={estilo.dadosPontos}> Equipe </Text>
                <Text style={estilo.dadosValor}> {equipe} </Text>
                <Text style={estilo.dadosPontos}> Pontos </Text>
                <Text style={estilo.dadosValor}> {pontos} </Text>
                <Text style={estilo.dadosPontos}> Jogos </Text>
                <Text style={estilo.dadosValor}> {jogos} </Text>
                <Text style={estilo.dadosPontos}> PlacarCheio </Text>
                <Text style={estilo.dadosValor}> {placarCheio} </Text>
                <Text style={estilo.dadosPontos}> Acerto Resultados </Text>
                <Text style={estilo.dadosValor}> {acertoResultados} </Text>
                <Text style={estilo.dadosPontos}> Placar Vencedor </Text>
                <Text style={estilo.dadosValor}> {placarVencedor} </Text>
                <Text style={estilo.dadosPontos}> Placar Perdedor </Text>
                <Text style={estilo.dadosValor}> {placarPerdedor} </Text>
                <Text style={estilo.dadosPontos}> Diferença de Gols </Text>
                <Text style={estilo.dadosValor}> {diferencaGols} </Text>
                <Text style={estilo.dadosPontos}> Tempo TempoAntecipado em horas </Text>
                <Text style={estilo.dadosValor}> {tempoAntecipado} </Text> 
              </View>
              </ScrollView>

            </View>
          </View>
        </View>
      </Modal>

    </View>

  )
}

const estilo = StyleSheet.create({
  botaoSuperiorEsquerdo: {
    backgroundColor: 'black',
    width: '50%',
    height: 50
  },
  botaoSuperiorDireito: {
    backgroundColor: 'black',
    width: '50%',
    height: 50
  },
  grupoBotoesSuperiores: {
    flexDirection: 'row'
  },
  box: {
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
  dataInicio: {
    color: 'gray'
  },
  paises: {
    color: 'gray'
  },
  imgPaisCasa: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 90
  },
  imgPaisFora: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginLeft: 90
  },
  blocoPlacar: {
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
    marginLeft: '4%'
  },
  itemParticipante:{
    padding: 10,
    fontSize: 16,
    height: 44,
    
  },
  pontos: {
    fontSize: 15,
    marginTop: -13,
    marginLeft: '20%',
    marginBottom: '2%'
  },
  Lista: {

    marginBottom: '1%',
    marginTop: '1%',
    borderBottomWidth: 0.2,
    borderEndColor: '#e6e6e6'
  },
  flexa: {
    textAlign: 'right',
    
  },
  Direction: {
    flexDirection: 'row',

  },
  seta: {
    textAlign: 'right',
  },
  blocoSeta: {
    flexDirection: 'row-reverse',
    flex: 1,
    marginTop: '5%'

  },
  lista: {
    borderWidth: 0.2,
    borderEndColor: '#e6e6e6'
  },
  modalWindow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBody: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  },
  inputCasa: {
    width: 35,
    height: 40,
    borderWidth: 1,
    borderColor: "#000"
  },
  inputFora: {
    width: 35,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    marginLeft: 15
  },
  grupoInputs: {
    flexDirection: 'row',
    marginTop: 10
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#008000',
    padding: 10,
    width: 300,
    marginTop: 16,
    marginLeft: '10%',
    marginRight: '10%'
  },
  corBotao: {
    color: 'white',
    fontWeight: 'bold'
  },
  Titulo: {
    height: 50,
    width: '100%',
    backgroundColor: '#151f79',
    flexDirection: 'row',
  },
  PaisesTopo: {
    color: 'white',
    fontSize: 20,
    marginTop: 10
  },
  doisPaisesAposta: {
    flexDirection: 'row',
    marginLeft: 5
  },
  imagemCasa: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginTop: '10%',
    marginLeft: '10%',
    marginRight: '5%'
  },
  imagemFora: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginTop: '10%',

  },
  seuPitaco: {
    marginTop: '30%',
    marginLeft: '10%',
    fontSize: 11
  },
  vs: {
    marginLeft: '25%'
  },
  corBotaoFechar: {
    color: 'white',
    marginTop: 20,
    flexDirection: 'row-reverse',
    flex: 1,


  },
  colapse: {
    color: '#0088ff',
    marginLeft: '30%',
    fontSize: 10,
    marginTop: '5%',
    marginBottom: '5%'
  },
  bordaCollapse: {
    borderTopColor: '#bbbfc3',
    borderLeftColor: '#ffffff',
    borderRightColor: '#ffffff',
    borderBottomColor: '#bbbfc3',
    borderWidth: 1,
    marginTop: '5%'
  },
  bordaCollapseGeral: {
    borderTopColor: '#bbbfc3',
    borderLeftColor: '#ffffff',
    borderRightColor: '#ffffff',
    borderBottomColor: '#bbbfc3',
    borderWidth: 1,
  },
  dadosPontos: {
    borderColor: '#gray',
    borderWidth: 0.2,
    padding: 10,
    fontSize: 16,
    height: 44,
    color: 'gray',
    fontSize: 13
  },
  dadosValor: {
    fontSize: 13,
    borderWidth: 0.2,
    padding: 10,
    fontSize: 16,
    height: 44,
    color: 'black'
  },
  minhaPosicaoEstilo:{
    textAlign: 'center',
    marginBottom: '5%',
    marginTop: '5%',

  },
  botaoFechar:{
    color: 'white'
        
  },
  viewBotaoFechar:{
    flexDirection: 'row-reverse',
    flex: 1,
    marginTop: '5%',
    marginLeft: '5%'
  },
  nomeUsuario:{
    color: 'white',
    marginTop: '4%',
    fontSize: 18
  },
  banner:{
    width:'100%',
    height: '10%',
    resizeMode: "contain",
  }
});

