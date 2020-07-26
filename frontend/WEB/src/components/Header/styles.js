import styled from 'styled-components';

export const container = styled.div`
position: relative;
width: 100%;
height: 70px;
background: #20295F;
border-bottom: 4px solid #EE6B26;
display: flex;  /* Alinhar ao lado */


`
export const LeftSide = styled.div`
position: relative;
 width: 20%;
 height: 70px;
 display:flex;
 align-items:center;
 padding-left: 10px;
 img{
   width: 100px;
   height: 40px;
 }&:hover{
    opacity: 0.7;
  }
`

export const RightSide = styled.div`
font-weight:bold;
width: 80%;
height: 70px;
display:flex;
align-items:center;
justify-content: flex-end;  /* para alinhar a direita */

a{ color:#FFF;
text-decoration: none;
margin: 0 10px;
&:hover{ color: #EE6B26}
}

button{
background: none;
border: none;
cursor: pointer;
}

.dividir::after{
content: "|";
 margin: 0 10px;
 color:#FFF;
}

#notification{
  img{
    padding-top: 5px;
    width:30px;
    height: 30px;
  }
  span{
    background:#FFF;
    color: #EE6B26;
    padding: 3px 7px;
    border-radius: 50px; 
    position: relative;
    top: -20px;
    right: 10px;
  }
  &:hover{
    opacity: 0.5;
  }
}

#SAIR{
color: #fff;
background: none;
border: none;
cursor: pointer;
font-size: 16px;
font-weight:bold;
&:hover{ color: #EE6B26}
} 

`