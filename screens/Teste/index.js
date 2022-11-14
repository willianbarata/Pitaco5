import React,{useEffect,useState} from "react";
import { View, Text,StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { MaterialCommunityIcons, FontAwesome, Ionicons, FontAwesome5    } from '@expo/vector-icons';

import ClassificacaoScreen from "../ClassificacaoScreen";
import ContaScreen from '../ContaScreen';
import InformacoesScreen from '../InformacoesScreen';
import PitacosScreen from '../PitacosScreen';
import TabelaScreen from '../TabelaScreen';

import api from "../../services/api";

const Tab = createBottomTabNavigator();
export default () => {

   const [valor, setValor] = useState({})

  useEffect(() => {
      const getBarberInfo = async () => {
          var lista = "";
        var res = await api.listarjogos(lista);
        
        console.log(valor);
          //setValor(res);

          //imprimir();
      }
      getBarberInfo();
      
    }, []);


     

    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: "#151f79"},
                tabBarActiveTintColor: "#FFF",
                tabBarInactiveTintColor: "#b4b6d3",
                headerStyle: {
                  backgroundColor: "#151f79"
                },
                headerTitleStyle: {
                  color: '#FFF'
                },
              }} >
            <Tab.Screen name="Tabela" 
                component={TabelaScreen}
                options={{
                    tabBarIcon: () =>(
                      <MaterialCommunityIcons name="file-table-box-multiple-outline" size={24} color="#b4b6d3" />
                    ),
                }} />    
            
            <Tab.Screen name="Pitacos"
                 component={PitacosScreen}
                options={{
                    tabBarIcon: () =>(
                    <FontAwesome name="pencil" size={24} color="#b4b6d3" />
                    ),
                }} />
            <Tab.Screen 
                name="Classificação" 
                component={ClassificacaoScreen} 
                options={{
                    tabBarIcon: () =>(
                      <FontAwesome5 name="medal" size={24} color="#b4b6d3" />
                    ),
                }}
                />
            <Tab.Screen 
                name="Informacões" 
                component={InformacoesScreen} 
                options={{
                    tabBarIcon: () =>(
                      <Ionicons name="ios-information" size={24} color="#b4b6d3" />
                    ),
                }}
                />
            <Tab.Screen 
                name="Conta" 
                component={ContaScreen} 
                options={{
                    tabBarIcon: () =>(
                      <MaterialCommunityIcons name="account-multiple-outline" size={24} color="#b4b6d3" />
                    ),
                }}/>
            
            
            
            </Tab.Navigator>
        </NavigationContainer>
    )
}