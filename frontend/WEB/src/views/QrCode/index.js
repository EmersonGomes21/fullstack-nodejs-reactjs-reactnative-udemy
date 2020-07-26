import React, { useState} from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';
import CelularQr from '../../assets/celularQr.png'
//nossos componentes
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

function QrCode() {
const [mac, setMac]= useState();
const [redirect, setRedirect] = useState(false);
async  function SaveMac(){
  if(!mac)
  alert('Informe o QRCode!');
  else{
     await localStorage.setItem('@todo/macaddress', mac);
      setRedirect(true);
      window.location.reload();
   } 
}

   return (
    <S.container>
      {redirect && <Redirect to="/"/>}
      <Header/> 
       <S.content>
         <S.Cell>
         <h1> CAPTURE O QRCODE</h1>
         <img src={CelularQr} id="CelularQr"/>
         </S.Cell>
         <h3>Sincronize suas atividades com a do celular.</h3>
         <S.QrCodeArea>
         <Qr value='Emerson' size={200}/>
           
         </S.QrCodeArea>
         <S.ValidationCode>
             <h5>Digite a numeração que apareceu no celular!</h5>
             <input type="text" placeholder="Digite o código QR..." onChange={e => setMac(e.target.value)}  value={mac}/>
             <button type="button" onClick={SaveMac} >SINCRONIZAR</button>

           </S.ValidationCode>
       </S.content>

      <Footer/>
    </S.container>

    )
   
}
export default QrCode;