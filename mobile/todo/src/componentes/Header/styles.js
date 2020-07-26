import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
header: {
  width: '100%',
  height: 60,
  backgroundColor: '#20295f',
  borderBottomWidth: 4, //borda de baixo
  borderBottomColor: '#ee6b26',
  alignItems: 'center',
  justifyContent: 'center',
  left: 0,
  bottom: -24
}, 

logo:{
  top: 0,
  width: 100,
  height: 30,
  left: 2,
  bottom: 30,
  
  
}, notification:{
  position: 'absolute',
  right: 20
},
notificationImage:{
  width: 25,
  height: 30,
  left: 2,
  bottom: -10
},
notificationText:{
  fontWeight: 'bold',
  color: '#ee6b26'
}, 
circle:{
  backgroundColor: '#fff',
  borderRadius: 50, //arredonda as bordas
  alignItems: 'center',
  left: 13,
  bottom: 28,
},
leftIcon:{
  position: 'absolute',
  left: 20
},
qrcodeImage:{
  width: 30,
  height: 30,
  left: 2,
  bottom: 0
}, bottomBack:{
  width: 30,
  height: 30,
  left: 2,
  bottom: 0

}

});

export default styles;