import React,{ useState, useEffect } from "react";
import { ImageBackground, View, Text, Image,StyleSheet, TextInput, render } from "react-native";
//import Logo1 from './../assets/img/background/logo1.png';
//import Logo2 from './../assets/img/background/riosoft_normal.png';
import api from "../../services/api";
import imgRiosoft from "../../assets/riosoft_normal.png"



export default class InformacoesScreen extends React.Component {
   

    constructor(props) {
      super(props);

      this.state = {
        GrupoCod : ""
      };
    }
  
    componentDidMount() {
        const getBarberInfo = async () => {
            var lista = "";
            var res = await api.login(lista);
            var infoUsu = JSON.parse(res)

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
                    <View style={estilos.Container}>
                        
                    <Text style={estilos.titleText}> Grupo </Text>
                    <Image style={ estilos.img } source={ {uri:this.state.ImagemGrupo }}/>
                   
                    <Text style={estilos.textDefaut}> Grupo: {this.state.GrupoNome}</Text>

                    <Text style={estilos.textDefaut}> Moderador:{this.state.ModeradorNome}</Text>
                    <Text style={estilos.textDefaut}> {this.state.ModeradorEmail}</Text>
                   
                    <Text style={estilos.textDefaut2}> Participantes :{this.state.Participantes} </Text>
                    
                    <Text style={estilos.titleText}> Suas informações </Text>

                    <Text style={estilos.textDefaut2}> {this.state.UsuarioNome} </Text>

                    <Text style={estilos.textDefaut2}> {this.state.UsuarioEmail} </Text>

                    <Image
                     style={{width: '50%', height: '50%', resizeMode: "contain"}}
                    source={imgRiosoft}
                    /> 
            </View>
      );
    }
  }


  
const estilos = StyleSheet.create({

    titleText:{
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
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
        fontSize: 14,
        textAlign: "auto", 
        fontWeight: "normal",
        marginTop: '5%',
        marginBottom: '5%'
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
        paddingHorizontal: 14
    },
     img: {
        width: 65,
        height: 65,
        resizeMode: "contain",
        marginTop: '5%',
        marginBottom: '5%'
     },
     img2: {
        width: 95,
        height: 95,
        resizeMode: "contain"
     },
})
