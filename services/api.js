import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import xml2json from '@hendt/xml2json';
const parseString = require('react-native-xml2js').parseString;
var  analisador  = require ( 'xml2json-light' ) ; 
import XMLParser from 'react-xml-parser';

const baseUrl = 'https://api.pitacosdacopa.com.br/bolao/ws-api';

//const soap = require('soap');
//const axios = require('axios');
//const parser = require('xml2json');

const request = async (method, endpoint, params, token = null) => {
    method = method.toLowerCase();
    let fullUrl = `${baseUrl}${endpoint}`;
    let body = null;

    switch(method){
        case 'get':
            let queryString = new URLSearchParams(params).toString();
            fullUrl += `?${queryString}`;
        break;
        case 'post':
        case 'put':
        case 'delete':
            body = JSON.stringify(params);
        break;
    }

    let headers = {'Content-Type' : 'application/json'};
    if(token){
        headers.Authorization = `Bearer ${token}`;
    }

    let req = await fetch(fullUrl, { method, headers, body });
    let json = await req.json();
    return json;
}

const post = async (param) => {
    const x = axios.post('https://api.pitacosdacopa.com.br/bolao/ws-api?wsdl', param, {
                    headers: {'Content-Type': 'text/xml'}
                })
                .then(function (res) {
                    return res;
                })
                .catch(function (error) {
                   // console.log(error);
                });
    const y = await x;
    
    return y.data;
}

const postPalpite = async (param) => {
    const x = axios.post('https://api.pitacosdacopa.com.br/bolao/ws-api?wsdl', param, {
                    headers: {'Content-Type': 'text/xml'}
                })
                .then(function (res) {
                    
                    return res;
                })
                .catch(function (error) {
                   //console.log(error);
                });
    const y = await x;
    console.log(y.data)
    return y.status;
}


export default {
    getToken: async () => {
        return await AsyncStorage.getItem('token');
    },
    validateToken: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/auth/validade', {}, token);
        return json;
    },
    login: (lista) => {//listar infousu
        let xmls='<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<ObterInfoUsuarioRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678"/>' +
        '</Body>' +
        '</Envelope>';
        
        return post(xmls).then((resp) => {
            return new Promise((resolve, reject) => {
                
                var json = xml2json(resp); 
                json = json["S:Envelope"]["S:Body"]["ns2:ObterInfoUsuarioRS"];
                json = JSON.stringify(json)
                resolve(json)

                return json;
            })
        });
        
    },

    loginAuth: (lista, login, password) => {//listar infousu
        let log = 'usuario="'+ login +'" senha= "'+ password + '"';
        console.log(log);
        
        let xmls='<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        //'<ObterInfoUsuarioRQ xmlns="http://soap.webservices/" Usuario="' + login +'" Senha= "'+ password + '"/>' +
        '<ObterInfoUsuarioRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678"/>' +
        '</Body>' +
        '</Envelope>';
        
        return post(xmls).then((resp) => {
            return new Promise((resolve, reject) => {
                
                var json = xml2json(resp); 
                json = json["S:Envelope"]["S:Body"]["ns2:ObterInfoUsuarioRS"]["Resposta"]["_@attribute"];
                json = JSON.stringify(json);
                resolve(json);
                
                //onsole.log(json)

                return json;
            })
        });
        
    },

    listapalpite: (email, password) => {
        let xmls='<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<ListarPalpitesRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678"/>' +
        '</Body>' +
        '</Envelope>';
        //console.log("Chamou Lista Palpite")
        return post(xmls).then( (resp) =>{
            return new Promise((resolve, reject) => {
                var json = xml2json(resp); 
                
                var jsongp = json["S:Envelope"]["S:Body"]["ns2:ListarPalpitesRS"]["PalpitesJogos"]["Jogo"]
                jsongp = JSON.stringify(jsongp)
                
                resolve(jsongp)
                
                return jsongp;
            });
        });
        
    },

    listarestatistica: (email, password) => {
        let xmls=
        '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<ObterEstatisticasJogoRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678" >' +
        '<CodigoJogo xmlns="">382</CodigoJogo>' +
        '</ObterEstatisticasJogoRQ>' +
        '</Body>' +
        '</Envelope>';
        
        //console.log(xmls)
        post(xmls).then(function (resp) {
            var json = xml2json(resp);

            var jsongp = json["S:Envelope"]["S:Body"]["ns2:ObterEstatisticasJogoRS"]["Estatisticas"]["Estatistica"];
            JSON.stringify(jsongp)
          //  console.log(jsongp); //TODO: listados todas estatisticas falta ordenar na tela

            
        });
        
    },


    listarjogos: (lista) => {
        let xmls=
        '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<ListarJogosRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678" />' +
        '</Body>' +
        '</Envelope>';
       return post(xmls).then( (resp) =>{
            return new Promise((resolve, reject) => {
                var json = xml2json(resp);    
               
                jsongp = json["S:Envelope"]["S:Body"]["ns2:ListarJogosRS"]["Jogos"]["Jogo"]
                jsongp = JSON.stringify(jsongp)
              //  lista = resolve["S:Envelope"]["S:Body"]["ns2:ListarJogosRS"]["Jogos"]["Jogo"];
                resolve(jsongp)
                
                return jsongp;
            });
        });
    },

    listarclassificacao: (email, password) => {
        let xmls=
        '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<ListarClassificacaoRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678"/>' +
        '</Body>' +
        '</Envelope>'



        var xmlTeste = '<?xml version=1.0 >	'
        +'<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">'
        +'<S:Body>'
        +'<ns2:ListarClassificacaoRS xmlns:ns2="http://soap.webservices/">'
    +'<Resposta Tipo="SUCESSO"/>'
    +'<Campeonato>Copa do Mundo 2018</Campeonato>'
    +'<Posicoes Tipo="GRUPO" PosicaoUsuario="15">'
        +'<Posicao Posicao="1" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Vinícius Cucolo" Email="vinicius.cucolo@riosoft.com.br" Equipe="Equipe Web Java"/>'
        +'<Posicao Posicao="2" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Everton Oliveira" Email="everton.oliveira@riosoft.com.br" Equipe="Equipe Web Java"/>'
        +'<Posicao Posicao="3" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Thaynan Ribeiro" Email="thaynan.ribeiro@riosoft.com.br" Equipe="Equipe Web Java"/>'
        +'<Posicao Posicao="4" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Giovanna Gesser Castelan" Email="giovanna.castelan@riosoft.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="5" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Gilberto Azevedo E Silva" Email="gilberto.silva@riosoft.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="6" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Rissier Luccas Chiquetto Buares" Email="rissier.buares@gmail.com" Equipe="Não definida"/>'
        +'<Posicao Posicao="7" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Carlos Henrique Siqueira Valerio" Email="carlos.valerio@riosoft.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="8" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Michelle Gomes" Email="michelle.gomes@riosoft.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="9" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Ricardo Lehn" Email="ricardo.lehn@riosoft.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="10" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Vania Mara Lomba Castelan" Email="vania.lomba@riosoft.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="11" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Myrian Bottan" Email="myrian.bottan@riosoft.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="12" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Rogerio Arturo De Menezes" Email="rogerioarturom@gmail.com" Equipe="Não definida"/>'
        +'<Posicao Posicao="13" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Daniela Galassi" Email="daniela.galassi@riosoft.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="14" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Joao Vitor Jardim" Email="JOAO.JARDIM@ITRAVEL.COM.BR" Equipe="Não definida"/>'
        +'<Posicao Posicao="15" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Willian Fernando Barata Dos Santos" Email="william.santos@riosoft.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="16" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Milton Olimpio Junior" Email="junior.olimpio@itravel.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="17" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Marisa Silva" Email="marisa.silva@riosoft.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="18" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Lucas Mateus Rafael" Email="lucas.rafael@riosoft.com.br" Equipe="Não definida"/>'
        +'<Posicao Posicao="19" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Marcelo Pedroso" Email="marcelo.pedroso@riosoft.com.br" Equipe="Não definida"/>'
    +'</Posicoes>'
    +'<Posicoes Tipo="EQUIPE" PosicaoUsuario="2">'
        +'<Posicao Posicao="1" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Equipe Web Java" Aproveitamento="0%"/>'
        +'<Posicao Posicao="2" Jogos="0" Pontos="0" PlacarCheio="0" AcertoResultados="0" PlacarVencedor="0" PlacarPerdedor="0" DiferencaGols="0" TempoAntecipado="0" Usuario="Não definida" Aproveitamento="0%"/>'
    +'</Posicoes>'
    +'<Banners>'
        +'<Banner Nome="Alvo ERP" Tipo="Topo" Link="https://bit.ly/AlvoERP" URL="https://www.riosoft.com.br/wp-content/uploads/Banner-Cabecalho-728x90-ERP.png"/>'
        +'<Banner Nome="LGPD" Tipo="Rodapé" Link="https://bit.ly/RSLGPD" URL="https://www.riosoft.com.br/wp-content/uploads/Banner-Cabecalho-728x90-LGPD.png"/>'
    +'</Banners>'
+'</ns2:ListarClassificacaoRS>'
+'</S:Body>'
+'</S:Envelope>'

        return post(xmls).then( (resp) =>{
            return new Promise((resolve, reject) => {

                //var json = xml2json(resp); 
                console.log('passou 1')

                var textoPosicao1 = `<Posicoes Tipo="GRUPO"`
                var textoPosicao2 = `</Posicoes><Posicoes`

                var posicao1 = xmlTeste.indexOf(textoPosicao1)
                var posicao2 = xmlTeste.indexOf(textoPosicao2)

                console.log('posicao1 -------------------------')
                console.log(posicao1)

                var xmlComPosicao = xmlTeste.substring(posicao1, posicao2)

                //console.log('****************************')
                //console.log(xmlComPosicao)
                
                var xmlConvertido = new XMLParser().parseFromString(xmlComPosicao); 
                console.log('passo 2')
                //console.log('****************************')
               // console.log(xmlConvertido)
               
                //var xmlPosicao = xmlConvertido["Posicoes"]["Posicao"]

                xmlConvertidoString = JSON.stringify(xmlConvertido)
                console.log('passo 3')
                console.log("****************************")
                //console.log(xmlConvertidoString)

                /* var json = xml2json(resp);    
                jsongp = json["S:Envelope"]["S:Body"]["ns2:ListarJogosRS"]["Jogos"]["Jogo"]
                jsongp = JSON.stringify(jsongp)
                resolve(jsongp) */

              //  lista = resolve["S:Envelope"]["S:Body"]["ns2:ListarJogosRS"]["Jogos"]["Jogo"];

                

                resolve(xmlConvertidoString)
                console.log('passo 4')
                return xmlConvertidoString;
            });
        });
        
    },



    palpitarjogo: (codJogo, golTime1, golTime2) => { //erro 500
    

        let xmls=
     '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.webservices/">'+
   '<soapenv:Header/>'+
   '<soapenv:Body>'+
      '<soap:PalpitarJogoRQ Usuario="william.santos@riosoft.com.br" Senha="12345678">'+
         '<CodigoJogo>'+ codJogo +'</CodigoJogo>'+
         '<GolsTime1>'+ golTime1 +'</GolsTime1>'+
         '<GolsTime2>'+ golTime2 +'</GolsTime2>'+
      '</soap:PalpitarJogoRQ>'+
   '</soapenv:Body>'+
'</soapenv:Envelope>'

     return postPalpite(xmls).then( (resp) =>{
            return new Promise((resolve, reject) => {
                //var json = xml2json(resp);  
                //var jsongp = JSON.stringify(json);
                //resolve(jsongp)
                //console.log(jsongp) 
        });
      }) 
    },

}

