import React , {useContext, useState} from "react";
import { ImageBackground, View, Text, Image,StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Logo1 from './../../assets/logo1.png';
import backgroundImagem from './../../assets/bg_login.jpg';

import {  FontAwesome5 , Entypo, AntDesign   } from '@expo/vector-icons';
import api from "../../services/api";

export default () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const login = async () => {
        if(email && password){
            let result = api.login(email, password)
            navigation.navigate('Teste')
            
        }
        else{
            alert("Favor informar e-mail e senha!")
        }
    }

    return(
        <View style={ estilos.container}>
        <ImageBackground source={ backgroundImagem }
            resizeMode="cover"
            style={estilos.imagemFundo}>
        <Image style={ estilos.img } source={ Logo1 } />
       
        <View style={ estilos.inputContainer }>
       
        <View style={estilos.SectionStyle}>
            <AntDesign style={estilos.mail} name="mail" size={24} color="black" />
            <TextInput
                placeholder="Digite seu e-mail"
                underlineColorAndroid="transparent"
                value={email}
                onChangeText={setEmail}
            />
        </View>
       
        <View style={estilos.SectionStyle}>
             <Entypo style={estilos.lock} name="lock" size={24} color="black" />
              <TextInput
                placeholder="Digite sua senha"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                value={password}
                onChangeText={setPassword}
            />
        </View>
            <View style={estilos.containerBotao}>
            <TouchableOpacity style={estilos.botaoAcessar} onPress={login}>
            <Entypo style={estilos.iconesAcessar}  name="arrow-with-circle-right" size={24} color="black" />
                <Text style={estilos.botaoTextoAcessar}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botaoRegistrar} >
                <FontAwesome5 style={estilos.iconesRegistrar}  name="user-plus" size={20} color="black" />
                <Text style={estilos.botaoTextoRegistrar}>Registrar</Text>
            </TouchableOpacity>
            </View>
           
        </View>
        </ImageBackground>
    </View>

    );
}

const estilos = StyleSheet.create({
    container:{
        flex: 1
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 34,
        paddingHorizontal: 14
    },
    input:{
        width: '95%',
        height: 40,
        marginBottom: 12,
        color: '#FFF',
        backgroundColor: "#fff"
    },  
     img: {
        width: 300,
        height: 200,
        resizeMode: "contain"
     },
     imagemFundo:{
        flex: 1,
        justifyContent: "center"
     },
     botaoAcessar:{
        width:120,
        height: 40,
        backgroundColor: "#f7ef00",
        flexDirection: 'row',
     },
     botaoRegistrar:{
        width: 120,
        height: 40,
        backgroundColor: '#008cff',
        flexDirection: 'row',
    },
    iconesAcessar:{
        marginLeft: 5,
        marginRight: 5,
        marginTop: 8
    },  
    iconesRegistrar:{
        marginLeft: 5,
        marginRight: 5,
        marginTop: 8,
        color: '#fff'
    },  
    containerBotao:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    botaoTextoAcessar:{
        textAlign: "center",
        color: "black",
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 8
    },
    botaoTextoRegistrar:{
        textAlign: "center",
        color: "white",
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 8
    },
    SectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',

        height: 40,
        borderRadius: 5 ,
        margin: 10,
        width: '95%',
    },
    mail:{
        marginLeft: 10
    },
    lock:{
        marginLeft: 10
    }
})