import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ClassificacaoScreen from '../screens/ClassificacaoScreen';
import ContaScreen from '../screens/ContaScreen';
import InformacoesScreen from '../screens/InformacoesScreen';
import PitacosScreen from '../screens/PitacosScreen';
import TabelaScreen from '../screens/TabelaScreen';

const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name="ClassificacaoScreen" component={ClassificacaoScreen} />
      <Tab.Screen name="ContaScreen" component={ContaScreen} />
      <Tab.Screen name="InformacoesScreen" component={InformacoesScreen} />
      <Tab.Screen name="PitacosScreen" component={PitacosScreen} />
      <Tab.Screen name="TabelaScreen" component={TabelaScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)