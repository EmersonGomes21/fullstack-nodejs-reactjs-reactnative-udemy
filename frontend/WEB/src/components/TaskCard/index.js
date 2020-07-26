import React, {useMemo} from 'react';
import {format} from 'date-fns';
//Icons
import iconOk from '../../assets/ok.png';
import iconOkRed from '../../assets/ok-red.png';
import iconOkAmarelo from '../../assets/ok-amarelo.png';


// nossos componentes
import * as S from './styles';
import typeIcons from '../../utils/typeIcons.js'

function TaskCard( {type, title, when, done}) {
  const date = useMemo(() => format (new Date(when), 'dd/MM/yyyy')); //convertendo o formato de texto para data e hora reconhecivel pelo js
  const current =  format (new Date, 'dd/MM/yyyy'); //formatei a data atual de acordo com a enviada para o mongo para poder comparar com a data do card
  const hour = useMemo(() => format (new Date(when), 'HH:mm')); 

  return (
    <S.container >
      <S.TopCard done={done} > 
        <img src={typeIcons[type]} alt="Icone da Tarefa" />
        
        <h3>{title}</h3>
      </S.TopCard>

      <S.BottomCard >
    <strong> {date}</strong>
     <span>{hour}</span>
      {done &&<img src={iconOk} alt="Icone de concluida" id="iconOk"/>}
      { (date < current && !done)  && <img src={iconOkRed} alt="Icone de não concluida" id="iconOkRed"/>}
      { (date == current && !done)  && <img src={iconOkAmarelo} alt="Icone de não concluida" id="iconOkRed"/>}
      </S.BottomCard>
    </S.container>
  )
}
export default TaskCard;
