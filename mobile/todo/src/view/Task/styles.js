import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute'

  },
  imageIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
    /*aumenta a margen na horizontal */

  },
  labelTitle: {
  
    color: '#707070',
    fontSize: 18,
    paddingHorizontal: 10,
    marginTop: -10,
    marginBottom: 0,

  }, labelDescription: {
   
    color: '#707070',
    fontSize: 18,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,

  },
  inputTitle: {
  
    fontSize: 16,
    padding: 10,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#EE6B26',
    marginHorizontal: 10

  },
  inputDescription: {
  
    fontSize: 16,
    padding: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#EE6B26',
    marginHorizontal: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'top'
  },
  inLine: { 
   top: 10, 
  padding: 0,
  left: 29,
   width: '80%',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
  },
  inputInline: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchLabel: {
    fontWeight: 'bold',
    color: '#EE6B26',
    textTransform: 'uppercase',/* transforma para maiúsculo*/
    fontSize: 16
  },
  removeLabel: {
    fontWeight: 'bold',
    color: '#20295F',
    textTransform: 'uppercase',/* transforma para maiúsculo*/
    fontSize: 16

  }

});


export default styles;