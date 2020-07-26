
// index header

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// nossos componentes
import * as S from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';


function Header({clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`)
      .then(response => {
        setLateCount(response.data.length)

      })
  }
  useEffect(()=>{
 lateVerify();
  })
async function Logout(){

  localStorage.removeItem('@todo/macaddress')
  window.location.reload();
}


  return (
    <S.container>

      <S.LeftSide>
        <img src={logo} alt="logo" />

      </S.LeftSide>

      <S.RightSide>
         <nav className="navbar navbar-expand-md navbar-dark" >
        <Link to="/"> INICIO </Link>
        <span className="dividir"> </span>
        <Link to="/task"> NOVA TAREFA </Link>
        <span className="dividir"> </span>
        
       { !isConnected ? <Link to="/qrcode"> SINCRONIZAR CELULAR </Link>
        :
        <button type="button" id="SAIR" onClick={Logout}>SAIR</button>}  { /* lógica para mostrar o botão sair apenas quando logado*/ }
        
        { lateCount && <>
        <span className="dividir"> </span>

         <button onClick={clickNotification} id="notification"> <img src={bell} alt="Notificação"/>
           <span>{lateCount}</span> 
           </button> </> }
           </nav>
      </S.RightSide>
    </S.container>
  )
}
export default Header;
