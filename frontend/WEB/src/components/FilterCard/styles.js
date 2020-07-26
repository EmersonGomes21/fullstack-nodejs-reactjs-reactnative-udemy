import styled from 'styled-components';

export const container = styled.div`
width: 200px;
height: 60px;
background: ${props => props.actived ? '#EE6B26': '#20295F'};
border-radius: 10px;
padding: 12px;
display: flex;  /* Alinhar ao lado */
flex-direction: column; /* Alinhar a baixo do outro */
justify-content: space-around; /* no centro do container */
cursor: pointer;

img{
  width: 25px;
  height: 25px;
} 

span{
  color: #FFF;
  font-weight: bold;
  align-self: flex-end;
  font-size: 18px;
  border:none;
}
&:hover{
  background: #EE6B26;
  
}


`