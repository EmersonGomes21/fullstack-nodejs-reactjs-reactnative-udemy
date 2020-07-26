import React, {Component} from 'react'
import {View, Button, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

export default class demopicker extends Component{
  state={
    date: new Date('2020-07-18T13:30:30'),
    mode: 'date',
    show: false

  }

  setDate = (event, date) =>{
    date=date||this.state.state
    this.setState({
      show: Platform.OS=== 'ios'?true : false,
      date,
    });
  }

show= mode =>{
  this.setState({
    show: true,
    mode,

  });
} 
datepicker=()=>{
    this.show('date');
}
timepicker=()=>{
  this.show('time');
}


  render(){
    const {show, date, mode }= this.state;
    return(

       <View>
         <View>
         <Button onPress={this.datepicker} title="Show date picker!" style={styles.buttonData}/>

         </View>
         <View>
         <Button onPress={this.timepicker} title="Show time picker!" style={styles.buttonTime}/>

         </View>
         {show && <DateTimePicker value={date} mode={mode} is24Hour={true} display='default' onChange={this.setDate} >
         </DateTimePicker> }
       </View>

       
    )
   
    
  }
 
   styles = StyleSheet.create({

    buttonData: {
      color: '#EE6b26',
      backgroundColor: '#fff',
      fontSize: 18,
      padding: 1,
      width: '70%',
      borderBottomWidth: 1,
      borderBottomColor: '#EE6b26',
      marginHorizontal: 10,
    }, buttonTime: {
      color: '#b23b26',
      backgroundColor: '#fff',
      fontSize: 18,
      padding: 10,
      width: '70%',
      borderBottomWidth: 1,
      borderBottomColor: '#EE6b26',
      marginHorizontal: 10,
    },
    
    iconTextInput:{
    position: 'absolute',
    left: "86%",
    top: 17,
    width: 25,
    height: 30,
    resizeMode: 'contain'
    
    }
    
    
    
    });
    
  
}
