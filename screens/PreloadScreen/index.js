import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native'

import { useStateValue } from '../../context/StateContext';
import api from './../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    useEffect(()=>{
        const checkLogin = async () => {
            let token = await api.getToken();
            if(token){
                let result = await api.validateToken();
                if(result.error === ''){
                    dispatch({
                        type: 'setUser',
                        payload: {
                            user: result.user
                        }
                    });
                    navigation.reset({
                        index: 1,
                        routes: [{name: 'TelaPrincipalScreen'}]
                    });
                }else{
                    alert(result.error);
                    dispatch({ 
                        type: 'setToken',
                        payload: {
                            token: ''
                        }});
                    navigation.reset({
                        index: 1,
                        routes: [{name: 'LoginScreen'}]
                    });
                    
                }
            } else {
                navigation.reset({
                    index: 1,
                    routes: [{name: 'LoginScreen'}]
                });
            }
        }

        checkLogin();
    }, [])

    return(
        <View>
            <Text> Preload</Text>
        </View>

    );
}

