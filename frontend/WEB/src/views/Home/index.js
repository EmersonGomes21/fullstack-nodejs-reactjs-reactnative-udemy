import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as S from './styles';
import api from '../../services/api.js';
import isConnected from '../../utils/isConnected';


//nossos componentes
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);
  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/${isConnected}`) /*macaddress foi substituido pelo IsConnected */
      .then(response => {
        setTasks(response.data)
      })
  }

  
  function Notification() {
    setFilterActived('late');
  }
  useEffect(() => { //chama a função loadTasks() e carrega todas as tarefas usando o backend, toda vez que a tela carregar e toda vez que o estado filterActived mudar.

    loadTasks();
   if (!isConnected)
    setRedirect(true);
  }, [filterActived])

  return (
    <S.container>
      {redirect && <Redirect to="/qrcode"/>}
      <Header clickNotification={Notification} />
      <Footer />
      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived == 'all'} /> </button>

        <button type="button" onClick={() => setFilterActived("today")}> <FilterCard title="Hoje" actived={filterActived == 'today'} /> </button>

        <button type="button" onClick={() => setFilterActived("week")} >
          <FilterCard title="Semana" actived={filterActived == 'week'} /></button>

        <button type="button" onClick={() => setFilterActived("month")} >
          <FilterCard title="Mês" actived={filterActived == 'month'} /> </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived == 'year'} /> </button>
      </S.FilterArea>

      <S.Title>
        <h3>{filterActived == 'late' ? 'TAREFAS PASSADAS' : 'TAREFAS'}</h3>
      </S.Title>
      <S.content >
        {
          tasks.map(t => (
            <Link to={`/task/${t._id}`}>  <TaskCard type={t.type} title={t.title} when={t.when}  done={t.done} /> </Link>

          ))
        }
      </S.content>

    </S.container>
  )
}
export default Home;
