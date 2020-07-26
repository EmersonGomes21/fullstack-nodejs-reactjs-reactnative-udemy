import React from 'react';
// nossos componentes
import * as S from './styles';
import filter from '../../assets/filter.png';
function FilterCard({title, actived}) {
  return (
    <S.container actived={actived}>
      <img src={filter} alt="Filtro"/>
  <span>{title}</span>
    </S.container>
  )
}
export default FilterCard;
