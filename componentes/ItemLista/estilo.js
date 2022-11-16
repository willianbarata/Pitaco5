import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  blocoPlacar:{
    backgroundColor: 'blue',
    flex: 1,
    marginTop: 50
  },
  placar: {
    fontSize: 18,
    alignItems: 'center',
   
  },
  placarX:{
    fontSize: 10,
    marginTop: 2,
    alignItems: 'center'
  },
  dataInicio:{
    color: 'gray'
  },
  paises:{
    color: 'gray'
  },
  imgPaisCasa:{
    width: 35,
    height: 35,
    borderRadius: 30,
    
  },
  imgPaisFora:{
    width: 35,
    height: 35,
    borderRadius: 30,
   
  },
  blocoPlacar:{
    flexDirection: 'row',
    flex: 1,
    justifyContent:'space-around',
    
  },
  corEnvioPitaco:{
    color: '#f12128',
    
    fontWeight: 'bold',
    fontSize: 12
  },
  seta:{
    marginTop: '2%',
    marginLeft: '2%'
  },
  placarPalpite:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%'
  },
  centralizando:{
    flex: 1,
    alignItems: 'center',
    
    marginBottom: '2%'
  },
  corAguardandoResultado:{
    color: 'purple',
    
    
    fontSize: 12
  }
 

});

export default estilo;