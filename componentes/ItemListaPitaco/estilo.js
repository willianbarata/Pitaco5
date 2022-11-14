import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  box:{
    padding: '5%',
    alignItems: 'center'
  },
  blocoPlacar:{

  },
  placar: {
    fontSize: 18,
    marginBottom: 5,
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
    marginRight: '35%'
  },
  imgPaisFora:{
    width: 35,
    height: 35,
    borderRadius: 30,
    marginLeft: '35%'
  },
  blocoPlacar:{
    flexDirection: 'row',
  },
  corEnvioPitaco:{
    color: '#f12128',
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 12
  },
  seta:{
    marginTop: '2%',
    marginLeft: '2%'
  }
 

});

export default estilo;