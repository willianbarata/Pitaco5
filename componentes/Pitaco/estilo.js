import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
 lista: {
  borderWidth: 0.2,  
  borderEndColor: '#e6e6e6'
 },
 modalWindow:{
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 },
 modalBody:{
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
 },
 inputCasa:{
  width: 35,
  height: 40,
  borderWidth: 1,
  borderColor: "#000",
  textAlign: 'center'
},
inputFora:{
  width: 35,
  height: 40,
  borderWidth: 1,
  borderColor: "#000",
  marginLeft: 15,
  textAlign: 'center'
},
grupoInputs:{
  flexDirection: 'row',
  marginTop: 10,
  
  justifyContent: 'center'
},
botao:{
    alignItems: 'center',
    backgroundColor: '#008000',
    padding: 10,
    width: 300,
    marginTop: 16,
    
},
corBotao:{
  color: 'white',
  fontWeight: 'bold' 
},
Titulo:{
  height: 50,
  width: '100%',
  backgroundColor: '#151f79',
  flexDirection: 'row',
  
},
PaisesTopo:{
  color: 'white',
  fontSize: 20,
  marginTop: 10
},
doisPaisesAposta:{
  flexDirection: 'row',
  justifyContent: 'center'
},
imagemCasa:{
  width: 100,
  height: 100,
  borderRadius: 30,
  marginTop: '10%',
},
imagemFora:{
  width: 100,
  height: 100,
  borderRadius: 30,
  marginTop: '10%',
  
},
seuPitaco:{
  marginTop: '30%',
  textAlign: 'center',
  fontSize: 11
},
vs:{
  textAlign: 'center'
},
corBotaoFechar:{
  
  color: 'white'

},
botaoFechar:{
  flexDirection: 'row-reverse',
  flex: 1,
  marginTop: '3%'
},
colapse:{
  color: '#0088ff',
  marginLeft: '30%',
  fontSize: 10,
  marginTop: '5%',
  marginBottom: '5%'
},
bordaCollapse:{
  borderTopColor: '#bbbfc3',
  borderLeftColor: '#ffffff',
  borderRightColor: '#ffffff',
  borderBottomColor: '#bbbfc3',
  borderWidth: 1,
  marginTop: '5%'
},
bordaCollapseGeral:{
  borderTopColor: '#bbbfc3',
  borderLeftColor: '#ffffff',
  borderRightColor: '#ffffff',
  borderBottomColor: '#bbbfc3',
  borderWidth: 1,
  
},
alinhandoBotaoPalpitar:{
  justifyContent: 'center',
  alignItems: 'center',
  
 
},
blocoVS:{
  justifyContent: 'center',
  
}
});

export default estilo;

