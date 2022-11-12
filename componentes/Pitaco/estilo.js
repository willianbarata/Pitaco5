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
  borderColor: "#000"
},
inputFora:{
  width: 35,
  height: 40,
  borderWidth: 1,
  borderColor: "#000",
  marginLeft: 15
},
grupoInputs:{
  flexDirection: 'row',
  marginTop: 10
},
botao:{
    alignItems: 'center',
    backgroundColor: '#008000',
    padding: 10,
    width: 300,
    marginTop: 16,
    marginLeft: '10%',
    marginRight: '10%'
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
  marginLeft: 5
},
imagemCasa:{
  width: 100,
  height: 100,
  borderRadius: 30,
  marginTop: '10%',
  marginLeft: '10%',
  marginRight: '5%'
},
imagemFora:{
  width: 100,
  height: 100,
  borderRadius: 30,
  marginTop: '10%',
  
},
seuPitaco:{
  marginTop: '30%',
  marginLeft: '10%',
  fontSize: 11
},
vs:{
  marginLeft: '25%'
},
corBotaoFechar:{
  color: 'white',
  marginTop: 20,
  marginLeft: '60%'
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
  
}
});

export default estilo;

