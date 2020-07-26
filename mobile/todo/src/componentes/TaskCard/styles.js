import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({

  card:{

   padding: 5,
   justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    marginVertical: 7,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 15,
  },
  cardLeft:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  typeActive:{
    width: 50,
    height: 50,
    left: 5,
    top: 0
  },
  cardTitle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },
  cardRight:{
    top: 6 ,
    left: -5,
    alignItems: 'flex-end',
    justifyContent: 'space-between',

  }, cardDate:{
    color: '#ee6b26',
    fontWeight: 'bold',
    fontSize: 14,
  
  },
  cardTime:{
   top: -5,
   color: '#707070',
  fontSize: 14,
    opacity: 0.7,
    fontWeight: 'bold'
  },
  done:{
    opacity: 0.5
  } 
  


});
export default styles;