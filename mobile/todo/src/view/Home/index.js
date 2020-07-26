import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import styles from './styles';
// COMPONENTES
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import TaskCard from '../../componentes/TaskCard';

//API
import api from '../../services/api';
export default function Home() {
  const [filter, setFilter] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);
  const [lateCount, setLateCount] = useState();

  async function loadTasks() {
    setLoad(true);//toda vez que chamar o LoadTasks, o setLoad é true
    await api.get(`task/filter/${filter}/11:11:11:11:11:11`).then(response => {
      setTasks(response.data)
      setLoad(false); //toda vez que os dados forem carregados, o setLoad é false
    });
  }

  async function lateVerify() {
    
    await api.get(`/task/filter/late/11:11:11:11:11:11`).then(response => {
      setLateCount(response.data.length)
      
    });
  }
    function Notification(){
   setFilter('late');
 }

  useEffect(() => {
    loadTasks();
    lateVerify();

  }, [filter])

  return (
    <View style={styles.container}>
      <Header showNotification={true} showBack={false} pressNotification={Notification} late={lateCount}/>

      <View style={styles.filter}>

        <TouchableOpacity onPress={() => setFilter('all')}>
          <Text style={filter == 'all' ? styles.filterTextActived : styles.filterTextInative}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('today')}>
          <Text style={filter == 'today' ? styles.filterTextActived : styles.filterTextInative}  >Hoje</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('month')}>
          <Text style={filter == 'month' ? styles.filterTextActived : styles.filterTextInative}>Semana</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('week')}>
          <Text style={filter == 'week' ? styles.filterTextActived : styles.filterTextInative}>Mês</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('year')}>
          <Text style={filter == 'year' ? styles.filterTextActived : styles.filterTextInative}>Ano</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleText} >TAREFAS {filter == 'late' && 'ATRASADAS'} </Text>
      </View>



      <ScrollView style={styles.scrollView} contentContainerStyle={{ alignItems: 'center' }}>

        {load

          ?
          <ActivityIndicator color={'#EE6b26'} size={40} />
          :
         
            tasks.map(t =>
              (
                <TaskCard done={false} title={t.title} when={t.when} type={t.type}/>

              ))    
          }       
      </ScrollView>
      <Footer icon={'add'} />

    </View>
  )
}