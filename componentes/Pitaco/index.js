import React, { useState, useEffect } from 'react';
import { View, FlatList, ScrollView, Modal, TouchableOpacity, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import Titulo from '../Titulo';
import ItemListaPitaco from '../ItemListaPitaco';
import Aposta from '../Aposta';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import itemLista from '../../componentes/ItemLista'
import estilo from './estilo';

import USA from './../../assets/bandeiras/USA_128x128.png';
import GALES from './../../assets/bandeiras/Pais_de_Gales_128x128.png';

import ALEMANHA from './../../assets/bandeiras/Alemanha_128x128.png';
import ARABIA from './../../assets/bandeiras/Arabia_Saudita_128x128.png';
import ARGENTINA from './../../assets/bandeiras/Argentina_128x128.png';
import AUSTRALIA from './../../assets/bandeiras/Australia_128x128.png';
import BELGICA from './../../assets/bandeiras/Belgica_128x128.png';
import BRASIL from './../../assets/bandeiras/Brasil_128x128.png';
import CAMAROES from './../../assets/bandeiras/Camaroes_128x128.png';
import CANADA from './../../assets/bandeiras/Canada_128x128.png';
import CATAR from './../../assets/bandeiras/Catar_128x128.png';
import COREIA from './../../assets/bandeiras/Coreia_do_Sul_128x128.png';
import COSTARICA from './../../assets/bandeiras/Costa_Rica_128x128.png';
import CROACIA from './../../assets/bandeiras/Croacia_128x128.png';
import DINAMARCA from './../../assets/bandeiras/Dinamarca_128x128.png';
import EQUADOR from './../../assets/bandeiras/Equador_128x128.png';
import ESPANHA from './../../assets/bandeiras/Espanha_128x128.png';
import FRANCA from './../../assets/bandeiras/Franca_128x128.png';
import GANA from './../../assets/bandeiras/Gana_128x128.png';
import HOLANDA from './../../assets/bandeiras/Holanda_128x128.png';
import INGLATERRA from './../../assets/bandeiras/Inglaterra_128x128.png';
import IRA from './../../assets/bandeiras/Ira_128x128.png';
import JAPAO from './../../assets/bandeiras/Japao_128x128.png';
import MARROCOS from './../../assets/bandeiras/Marrocos_128x128.png';
import MEXICO from './../../assets/bandeiras/Mexico_128x128.png';
import POLONIA from './../../assets/bandeiras/Polonia_128x128.png';
import PORTUGAL from './../../assets/bandeiras/Portugal_128x128.png';
import SENEGAL from './../../assets/bandeiras/Senegal_128x128.png';
import SERVIA from './../../assets/bandeiras/Servia_128x128.png';
import SUICA from './../../assets/bandeiras/Suica_128x128.png';
import TUNISIA from './../../assets/bandeiras/Tunisia_128x128.png';
import URUGUAI from './../../assets/bandeiras/Uruguai_128x128.png';

export default function Pitaco() {

    //Abrir Modal
    const [visivel, setVisivel] = useState(false);

    //Objeto completo
    const [valor, setValor] = useState({});
    const [atualizaTela, setAtualizaTela] = useState(false);

    //Pais dentro do modal
    const [pais1Modal, setPais1Modal] = useState('')
    const [pais2Modal, setPais2Modal] = useState('')
    const [nomePaisCorrigido1, setNomePaisCorrigido1] = useState('')
    const [nomePaisCorrigido2, setNomePaisCorrigido2] = useState('')

    const [textCasa, onChangeTextCasa] = React.useState("");
    const [textFora, onChangeTextFora] = React.useState("");

    const [paisCasa, setPaisCasa] = React.useState("");
    const [paisFora, setPaisFora] = React.useState("");

    const [codigoPitaco, seTcodigoPitaco] = useState('');
    const [dataPitaco, setData] = useState('');
    const [imgTime1, setImgTime1] = useState('');
    const [imgTime2, setImgTime2] = useState('');
    const [pitacoPais1, setPitacoPais1] = useState('');
    const [pitacoPais2, setPitacoPais2] = useState('');

    const [palpite1, setPalpite1 ] = useState('');
    const [codigojogo, setCodigoJogo] = useState('')
    const navigation = useNavigation();

    const getBarberInfo = async () => {
        var lista = "";
        var res = await api.listapalpite(lista);

        var jsonJogos = JSON.parse(res)
        jsonJogos["Palpite"]
        setValor(jsonJogos);
        //console.log(jsonJogos["Palpite"]?? "nulo")
        console.log('Renderizando Tela Pitaco')
      
    }

    useEffect(() => {
       
        getBarberInfo();

    }, [atualizaTela]);


    const apostando = () => {
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

    const abreAposta = (imagemDoTime1, imagemDoTime2, palpite1, palpite2) => {

        escolherPais1(imagemDoTime1)
        console.log(imagemDoTime1 + ' pais 1')
        escolherPais2(imagemDoTime2)
        console.log(imagemDoTime2 + ' pais 2')
        onChangeTextCasa(palpite1)
        onChangeTextFora(palpite2)
        
        setVisivel(true)
    }

    const palpite = async (codigoJogo, pitaco1, pitaco2) => {
        var resultado = api.palpitarjogo(codigoJogo,  pitaco1, pitaco2)
        console.log(pitaco1)
        console.log(pitaco2)
        //getBarberInfo();
        setAtualizaTela(!atualizaTela)
        setVisivel(false)

    }

    return (
        <View>
            <FlatList
                data={valor}
                renderItem={({ item }) =>
                    <ScrollView style={estilo.lista}>
                        <TouchableOpacity onPress={() => {

                            console.log('passando parametro')
                            //console.log(item)
                            console.log(item.Palpite?.PalpiteGolsTime1 ?? "nulo")
                            console.log(item.Codigo, item.DataHora, item.ImagemTime1, item.ImagemTime2, item.ImagemTime1, item.ImagemTime2 + 'antes de setar')
                            seTcodigoPitaco(item.Codigo)
                            setData(item.DataHora)
                            setImgTime1(item.ImagemTime1)
                            setImgTime2(item.ImagemTime2)
                            setPitacoPais1(item.ImagemTime1)
                            setPitacoPais2(item.ImagemTime2)
                            setCodigoJogo(item.Codigo)

                            console.log(codigoPitaco, dataPitaco, imgTime1, imgTime2 + 'ANTES')
                            abreAposta(item.ImagemTime1,item.ImagemTime2, item.Palpite?.PalpiteGolsTime1 ?? "", item.Palpite?.PalpiteGolsTime2 ?? "" )

                        }}>
                            <ItemListaPitaco pitaco1={item.Palpite?.PalpiteGolsTime1 ?? "-"} 
                                             pitaco2={item.Palpite?.PalpiteGolsTime2 ?? "-"}   
                                             dataInicio={item.DataHora} 
                                             pais1={item.ImagemTime1} 
                                             pais2={item.ImagemTime2} 
                                             imagemTime1={item.ImagemTime1} 
                                             imagemTime2={item.ImagemTime2} />
                        </TouchableOpacity>
                    </ScrollView>
                }

            />


            <Modal animationType='slide' transparent={true} visible={visivel} onRequestClose={() => { }}>
                <View style={estilo.modalWindow}>
                    <View style={estilo.modalBody}>
                        <View>
                            <View style={estilo.Titulo}>
                                <Text style={estilo.PaisesTopo}> {paisCasa} vs {paisFora} </Text>

                                <View style={estilo.botaoFechar}>
                                <TouchableOpacity onPress={apostando}>
                                    <Text style={estilo.corBotaoFechar}>FECHAR</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                            <View style={estilo.doisPaisesAposta}>
                                <Image source={pais1Modal} style={estilo.imagemCasa} />
                                <View >
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
                                    <View style={estilo.blocoVS}>
                                    <Text style={estilo.vs} > VS </Text>
                                    </View>
                                </View>
                                <Image source={pais2Modal} style={estilo.imagemFora} />
                            </View>
                            <View style={estilo.alinhandoBotaoPalpitar}>
                                <TouchableOpacity style={estilo.botao} onPress={() => {palpite(codigojogo, textCasa, textFora)}}>
                                    <Text style={estilo.corBotao} > ✓    PALPITAR</Text>
                                </TouchableOpacity>
                            </View>
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
                                        <Text style={estilo.colapse}>ESTATÍSTICAS GERAL</Text>
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





    function escolherPais1(imgPais) {

        // console.log(imgPais)


        switch (imgPais) {
            case "camaroes.png":
                setPais1Modal(CAMAROES)
                setNomePaisCorrigido1('Camarões')
                setPaisCasa('Camarões')
                setPalpite1('')
                break;
            case "brasil.png":
                setPais1Modal(BRASIL)
                setNomePaisCorrigido1('Brasil')
                setPaisCasa('Brasil')
                break;
            case "gana.png":
                setPais1Modal(GANA)
                setNomePaisCorrigido1('Gana')
                setPaisCasa('Gana')
                break;
            case "catar.png":
                setPais1Modal(CATAR)
                setNomePaisCorrigido1('Catar')
                setPaisCasa('Catar')
                break;
            case "senegal.png":
                setPais1Modal(SENEGAL)
                setNomePaisCorrigido1('Senegal')
                setPaisCasa('Senegal')
                break;
            case "estadosunidos.png":
                setPais1Modal(USA)
                setNomePaisCorrigido1('Estados Unidos')
                setPaisCasa('Estados Unidos')
                break;
            case "argentina.png":
                setPais1Modal(ARGENTINA)
                setNomePaisCorrigido1('Argentina')
                setPaisCasa('Argentina')
                break;
            case "dinamarca.png":
                setPais1Modal(DINAMARCA)
                setNomePaisCorrigido1('Dinamarca')
                setPaisCasa('Dinamarca')
                break;
            case "mexico.png":
                setPais1Modal(MEXICO)
                setNomePaisCorrigido1('México')
                setPaisCasa('México')
                break;
            case "franca.png":
                setPais1Modal(FRANCA)
                setNomePaisCorrigido1('Franca')
                setPaisCasa('Franca')
                break;
            case "marrocos.png":
                setPais1Modal(MARROCOS)
                setNomePaisCorrigido1('Marrocos')
                setPaisCasa('Marrocos')
                break;
            case "alemanha.png":
                setPais1Modal(ALEMANHA)
                setNomePaisCorrigido1('Alemanha')
                setPaisCasa('Alemanha')
                break;
            case "espanha.png":
                setPais1Modal(ESPANHA)
                setNomePaisCorrigido1('Espanha')
                setPaisCasa('Espanha')
                break;
            case "belgica.png":
                setPais1Modal(BELGICA)
                setNomePaisCorrigido1('Bélgica')
                setPaisCasa('Bélgica')
                break;
            case "suica.png":
                setPais1Modal(SUICA)
                setNomePaisCorrigido1('Suíça')
                setPaisCasa('Suíça')
                break;
            case "uruguai.png":
                setPais1Modal(URUGUAI)
                setNomePaisCorrigido1('Uruguai')
                setPaisCasa('Uruguai')
                break;
            case "portugal.png":
                setPais1Modal(PORTUGAL)
                setNomePaisCorrigido1('Portugal')
                setPaisCasa('Portugal')
                break;
            case "paisdegales.png":
                setPais1Modal(GALES)
                setNomePaisCorrigido1('País de Gales')
                setPaisCasa('País de Gales')
                break;
            case "holanda.png":
                setPais1Modal(HOLANDA)
                setNomePaisCorrigido1('Holanda')
                setPaisCasa('Holanda')
                break;
            case "inglaterra.png":
                setPais1Modal(INGLATERRA)
                setNomePaisCorrigido1('Inglaterra')
                setPaisCasa('Inglaterra')
                break;
            case "tunisia.png":
                setPais1Modal(TUNISIA)
                setNomePaisCorrigido1('Tunísia')
                setPaisCasa('Tunísia')
                break;
            case "polonia.png":
                setPais1Modal(POLONIA)
                setNomePaisCorrigido1('Polônia')
                setPaisCasa('Polônia')
                break;
            case "japao.png":
                setPais1Modal(JAPAO)
                setNomePaisCorrigido1('Japão')
                setPaisCasa('Japão')
                break;
            case "croacia.png":
                setPais1Modal(CROACIA)
                setNomePaisCorrigido1('Croácia')
                setPaisCasa('Croácia')
                break;
            case "coreiadosul.png":
                setPais1Modal(COREIA)
                setNomePaisCorrigido1('Coréia')
                setPaisCasa('Coréia')
                break;
            case "equador.png":
                setPais1Modal(EQUADOR)
                setNomePaisCorrigido1('Equador')
                setPaisCasa('Equador')
                break;
            case "ira.png":
                setPais1Modal(IRA)
                setNomePaisCorrigido1('Irã')
                setPaisCasa('Irã')
                break;
            case "australia.png":
                setPais1Modal(AUSTRALIA)
                setNomePaisCorrigido1('Austrália')
                setPaisCasa('Austrália')
                break;
            case "arabia_saudita.png":
                setPais1Modal(ARABIA)
                setNomePaisCorrigido1('Arábia Saudita')
                setPaisCasa('Arábia Saudita')
                break;
            case "canada.png":
                setPais1Modal(CANADA)
                setNomePaisCorrigido1('Canadá')
                setPaisCasa('Canadá')
                break;
            case "costarica.png":
                setPais1Modal(COSTARICA)
                setNomePaisCorrigido1('Costa Rica')
                setPaisCasa('Costa Rica')
                break;
            case "servia.png":
                setPais1Modal(SERVIA)
                setNomePaisCorrigido1('Sérvia')
                setPaisCasa('Sérvia')
                break;
        }
    }

    function escolherPais2(imgPais) {

        switch (imgPais) {
            case "camaroes.png":
                setPais2Modal(CAMAROES)
                setNomePaisCorrigido2('Camarões')
                setPaisFora('Camarões')
                break;
            case "brasil.png":
                setPais2Modal(BRASIL)
                setNomePaisCorrigido2('Brasil')
                setPaisFora('Brasil')
                break;
            case "gana.png":
                setPais2Modal(GANA)
                setNomePaisCorrigido2('Gana')
                setPaisFora('Gana')
                break;
            case "catar.png":
                setPais2Modal(CATAR)
                setNomePaisCorrigido2('Catar')
                setPaisFora('Catar')
                break;
            case "senegal.png":
                setPais2Modal(SENEGAL)
                setNomePaisCorrigido2('Senegal')
                setPaisFora('Senegal')
                break;
            case "estadosunidos.png":
                setPais2Modal(USA)
                setNomePaisCorrigido2('Estados Unidos')
                setPaisFora('Estados Unidos')
                break;
            case "argentina.png":
                setPais2Modal(ARGENTINA)
                setNomePaisCorrigido2('Argentina')
                setPaisFora('Argentina')
                break;
            case "dinamarca.png":
                setPais2Modal(DINAMARCA)
                setNomePaisCorrigido2('Dinamarca')
                setPaisFora('Dinamarca')
                break;
            case "mexico.png":
                setPais2Modal(MEXICO)
                setNomePaisCorrigido2('México')
                setPaisFora('México')
                break;
            case "franca.png":
                setPais2Modal(FRANCA)
                setNomePaisCorrigido2('Franca')
                setPaisFora('Franca')
                break;
            case "marrocos.png":
                setPais2Modal(MARROCOS)
                setNomePaisCorrigido2('Marrocos')
                setPaisFora('Marrocos')
                break;
            case "alemanha.png":
                setPais2Modal(ALEMANHA)
                setNomePaisCorrigido2('Alemanha')
                setPaisFora('Alemanha')
                break;
            case "espanha.png":
                setPais2Modal(ESPANHA)
                setNomePaisCorrigido2('Espanha')
                setPaisFora('Espanha')
                break;
            case "belgica.png":
                setPais2Modal(BELGICA)
                setNomePaisCorrigido2('Bélgica')
                setPaisFora('Bélgica')
                break;
            case "suica.png":
                setPais2Modal(SUICA)
                setNomePaisCorrigido2('Suíça')
                setPaisFora('Suíça')
                break;
            case "uruguai.png":
                setPais2Modal(URUGUAI)
                setNomePaisCorrigido2('Uruguai')
                setPaisFora('Uruguai')
                break;
            case "portugal.png":
                setPais2Modal(PORTUGAL)
                setNomePaisCorrigido2('Portugal')
                setPaisFora('Portugal')
                break;
            case "paisdegales.png":
                setPais2Modal(GALES)
                setNomePaisCorrigido2('País de Gales')
                setPaisFora('País de Gales')
                break;
            case "holanda.png":
                setPais2Modal(HOLANDA)
                setNomePaisCorrigido2('Holanda')
                setPaisFora('Holanda')
                break;
            case "inglaterra.png":
                setPais2Modal(INGLATERRA)
                setNomePaisCorrigido2('Inglaterra')
                setPaisFora('Inglaterra')
                break;
            case "tunisia.png":
                setPais2Modal(TUNISIA)
                setNomePaisCorrigido2('Tunísia')
                setPaisFora('Tunísia')
                break;
            case "polonia.png":
                setPais2Modal(POLONIA)
                setNomePaisCorrigido2('Polônia')
                setPaisFora('Polônia')
                break;
            case "japao.png":
                setPais2Modal(JAPAO)
                setNomePaisCorrigido2('Japão')
                setPaisFora('Japão')
                break;
            case "croacia.png":
                setPais2Modal(CROACIA)
                setNomePaisCorrigido2('Croácia')
                setPaisFora('Croácia')
                break;
            case "coreiadosul.png":
                setPais2Modal(COREIA)
                setNomePaisCorrigido2('Coréia')
                setPaisFora('Coréia')
                break;
            case "equador.png":
                setPais2Modal(EQUADOR)
                setNomePaisCorrigido2('Equador')
                setPaisFora('Equador')
                break;
            case "ira.png":
                setPais2Modal(IRA)
                setNomePaisCorrigido2('Irã')
                setPaisFora('Irã')
                break;
            case "australia.png":
                setPais2Modal(AUSTRALIA)
                setNomePaisCorrigido2('Austrália')
                setPaisFora('Austrália')
                break;
            case "arabia_saudita.png":
                setPais2Modal(ARABIA)
                setNomePaisCorrigido2('Arábia Saudita')
                setPaisFora('Arábia Saudita')
                break;
            case "canada.png":
                setPais2Modal(CANADA)
                setNomePaisCorrigido2('Canadá')
                setPaisFora('Canadá')
                break;
            case "costarica.png":
                setPais2Modal(COSTARICA)
                setNomePaisCorrigido2('Costa Rica')
                setPaisFora('Costa Rica')
                break;
            case "servia.png":
                setPais2Modal(SERVIA)
                setNomePaisCorrigido2('Sérvia')
                setPaisFora('Sérvia')
                break;
        }

    }



}


