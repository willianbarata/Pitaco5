import React,{ useState, useEffect } from "react";
import { ImageBackground, View, Text, Image,StyleSheet, TextInput, render, Button, TouchableOpacity } from "react-native";
//import Logo1 from './../assets/img/background/logo1.png';
//import Logo2 from './../assets/img/background/riosoft_normal.png';
import api from "../../services/api";
import imgBackGround from "../../assets/bg_login.png";
import backgroundImagem from './../../assets/bg_login.jpg';
import logoPitaco from "../../assets/logo2.png";
import { Linking, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default class InformacoesScreen extends React.Component {
    

    constructor(props) {
      super(props);
      this.navigate = async() => {
        console.log("Testeeei")
        useNavigation('Teste');
    }

      this.state = {
        GrupoCod : ""
      };
    }

    componentDidMount() {
        
        const getBarberInfo = async () => {
            var lista = "";
            var res = await api.login(lista);
            var infoUsu = JSON.parse(res)


             this.openUrl = async() => {
                await Linking.openURL('https://www.pitacosdacopa.com.br/')
            }

            this.setState({
                GrupoNome: infoUsu["Grupo"]["Nome"],
                ModeradorNome: infoUsu["Grupo"]["Moderador"]["Nome"],
                ModeradorEmail: infoUsu["Grupo"]["Moderador"]["Email"],
                Participantes: infoUsu["Grupo"]["Participantes"],
                UsuarioNome: infoUsu["Usuario"]["Nome"],
                UsuarioEmail: infoUsu["Usuario"]["Email"],
                ImagemGrupo: infoUsu["Grupo"]["UrlImagem"],
                
            })

          }
          getBarberInfo();
    }

  
  
    render() {
      return (
 
                <ImageBackground source={ backgroundImagem } resizeMode="cover" style={estilos.imagemFundo}>
                    <Image
                     style={{width: '70%', height: '30%', resizeMode: "contain", marginTop: '-50%', marginLeft: '10%'}}
                    source={logoPitaco}/> 
                    
                    <Text style={estilos.textDefaut2}>     Selecione a sua conta:</Text>
                    <TouchableOpacity>
                        <View style={estilos.Conta}>
                        <Image style={ estilos.img } source={ {uri:this.state.ImagemGrupo }}/>
                        <Text style={estilos.titleText}> {this.state.UsuarioNome} </Text>                         
                        </View>
                        <View>
                        <Text style={estilos.titleText2}> {this.state.UsuarioEmail} </Text>    
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.openUrl}>
                    <View style={estilos.Registro}>
                    <Text style={estilos.titleText3}> Adicionar Nova Conta </Text>   
                    </View>
                    </TouchableOpacity>

                </ImageBackground>
  
      );
    }
  }


  
const estilos = StyleSheet.create({

    titleText:{
        fontSize: 15,
        fontWeight: "bold",
        color: "black",

    },
    titleText2:{
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        textAlign: "left", 
        marginLeft: '50%'
    },
    titleText3:{
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        textAlignVertical: "center" ,
        color: 'white'
    },
    ContainerDefault:{
        width: '65%',
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingVertical: 14,
        paddingHorizontal: 14
    },
    textDefaut:{
        fontSize: 14,
        textAlign: "auto", 
        alignItems: "center",
        fontWeight: "normal"
    },
    textDefaut2:{
        fontSize: 16,
        marginRight:'auto',
        fontWeight: "normal",
        
    },
    textVariable:{
        fontSize: 14,
        textAlign: "auto", 
        fontWeight: "normal",
        color: "grey"
    },
    Container:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 74,
        paddingHorizontal: 14,
        ImageBackground: imgBackGround
    },
     img: {
        width: '50%',
        height: '100%',
        resizeMode: "contain", 
        flex: 1,
        justifyContent: "center",
        marginLeft: '-30%'

     },
     img2: {
        width: '95%',
        height: '95%',
        resizeMode: "contain"
     },
     imagemFundo:{
        flex: 1,
        justifyContent: "center"
     },
     Conta:{
        width: '95%',
        height: '30%',
        backgroundColor: 'white',
        marginLeft: '3%',
        marginRight: '3%',
        marginBottom: '-5%',
        marginTop: '5%', 
        flexDirection: 'row'
     },
     Registro:{
        width: '95%',
        height: '20%',
        backgroundColor: '#008cff',
        marginLeft: '3%',
        marginRight: '3%',
     }
})
