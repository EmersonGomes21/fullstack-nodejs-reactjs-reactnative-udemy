import React, {useState} from 'react';
import { TouchableOpacity,
Image,
TextInput,
DatePickerAndroid,
TimePickerAndroid,

 } from 'react-native';
 import DateTimePicker from '@react-native-community/datetimepicker';
 import styles from './styles';
 import iconCalendar from '../../assets/calendar.png';
 import iconClock from '../../assets/clock.png';
 export default function DateTimeInputAndroid({type}){

  const [datetime, setDateTime]= useState(new Date);
  
  async function selectDataOrHour(){

    if (type == 'date'){
      const {action, year, month, day} = await DatePickerAndroid.open({
        mode: 'calendar'
      });
     if (action == DatePickerAndroid.dateSetAction)
     setDateTime(`${day}-${month}-${year}`);
    }else {
      const {action, hour, minuto} = await TimePickerAndroid.open({
        is24Hour: true
      });
      if (action == TimePickerAndroid.dismissedAction)
      setDateTime(`${hour}:${minuto}`);
    }
  }
return(
<TouchableOpacity onPress={selectDataOrHour}>
  <TextInput style={styles.input} placeholder={type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora...'} editable={false} value={datetime}/>
   <Image style={styles.iconTextInput} source={type == 'date' ? iconCalendar : iconClock} />
</TouchableOpacity>

)

 }