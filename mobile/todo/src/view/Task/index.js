import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch
} from 'react-native';
// COMPONENTES 
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import Demopicker from '../../componentes/DateTimeInput/demopicker';
import styles from './styles';
import typeIcons from '../../utils/typeIcons';
// 

export default function Task() {
  const [done, setDone] = useState(false);
  return (

    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Header showBack={true}/> 
      <ScrollView style={{width: '100%'}}>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 35}} >
          {
          typeIcons.map(icon => (
            icon != null &&
            
            <TouchableOpacity style={styles.touchableTypeIcons}>
              <Image source={icon} style={styles.imageIcon}/>
            </TouchableOpacity>

            ))
          }
        </ScrollView>
        
      <Text style={styles.labelTitle}>Título</Text>

        <TextInput style={styles.inputTitle} maxLength={30} placeholder="Lembre-me de fazer..." />

        <Text style={styles.labelDescription}>Descrição</Text>

        <TextInput style={styles.inputDescription} maxLength={200} multiline={true} placeholder="Detalhes da tarefa..." />
        
       <Demopicker/>
       

      <View style={styles.inLine}>
        <View style={styles.inputInline}>
          <Switch onValueChange={() => setDone (!done)} value={done} thumbColor={done ? '#00761B': '#ee6b26'}/>
          <Text style={styles.switchLabel}>Concluído</Text>
        </View>
        <TouchableOpacity >
          <Text style={styles.removeLabel}>Excluír</Text>
        </TouchableOpacity>  
      </View>
      </ScrollView>
      <Footer icon={'save'} style={styles.footer}/> 
    </KeyboardAvoidingView>
   
  )
 
}