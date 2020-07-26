import React, { useState, useEffect } from 'react';
import {format} from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import api from '../../services/api.js'
import isConnected from '../../utils/isConnected';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import TypeIcons from '../../utils/typeIcons';
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task({match}) {
  const [redirect, setRedirect]= useState(false);
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  async function LoadTaskDetails(){
    await api.get(`/task/${match.params.id}`)/* match pega as informações do navegador, passando o id como parametro */
      .then(response =>{
        setType(response.data.type)
        setDone(response.data.done)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setDate(format(new Date(response.data.when),'yyy-MM-dd'))
        setHour(format(new Date(response.data.when),'HH:mm')) 
      })    
  }

   async function Save(){
 // Validação dos dados
  if (!type)
 return alert("Informe o tipo da tarefa")
 else if (!title)
 return alert("Informe o título da tarefa")
 else if (!description)
 return alert("Informe a descrição da tarefa")
 else if (!date)
 return alert("Informe a data da tarefa")
 else if (!hour)
 return alert("Informe o horário da tarefa")

  if (match.params.id) {
    await api.put(`/task/${match.params.id}`, {
      macaddress: isConnected,
      done,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`}  /*formarta para o MongoDB */
     
  ).then(() =>
    setRedirect(true)
  )} else{    
      await api.post('/task', {
        macaddress: isConnected,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`}  /*formarta para o MongoDB */
       
    ).then(() =>
    setRedirect(true)
    )
   } }

   async function Remove(){
      const res = window.confirm('Deseja realmente remover?')
      if(res==true){
        await api.delete(`/task/${match.params.id}`)
        .then(() => setRedirect(true));
      }
   }

  useEffect(() => {
    if(!isConnected)
    setRedirect(true);
    LoadTaskDetails();
  }, [])
  return (

    <S.container>
      {redirect && <Redirect to="/" />}
      <Header/>
      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index > 0 &&
              <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Tipo de Tarefa" className={type && type != index && 'inative'} />
              </button>
            ))
          }
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input type="text" placeholder="Título da tarefa.." maxlength="30" onChange={e => setTitle(e.target.value)} value={title} />
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder="Detalhes da tarefa..." onChange={e => setDescription(e.target.value)} value={description} />
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input type="date" placeholder="Data da tarefa.." onChange={e => setDate(e.target.value)} value={date}/>
          <img src={iconCalendar} alt="Calendário" />

        </S.Input>
        <S.Input>
          <span>Hora</span>
          <input type="time" placeholder="Hora da tarefa.." onChange={e => setHour(e.target.value)} value={hour}/>
          <img src={iconClock} alt="Relógio" />
        </S.Input>

        <S.Options>
          <div>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
            <span>CONCLUÍDO</span>
            {match.params.id && <button onClick={Remove}>EXCLUIR</button>}
          </div>
        </S.Options>
        <S.Save>
          <button type="button" onClick={Save}>SALVAR</button>
        </S.Save>


      </S.Form>
      <Footer />
    </S.container>
  )
}
export default Task;
