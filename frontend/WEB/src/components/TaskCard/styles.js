import styled from 'styled-components';

export const container = styled.div`
width:  240px;
height: 240px;
box-shadow: -3px 1px 13px 2px rgba(0,0,0,0.75);
border-radius: 10px;
display: flex;  /* Alinhar ao lado */
align-items: center;
justify-content: center; 
flex-direction: column; /* alinha abaixo do outro */
margin: 40px;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
  opacity: 0.5;
}
`
export const TopCard = styled.div`
padding: 5px;
width: 100%;
display: flex;  /* Alinhar ao lado */
align-items: center;
justify-content: center; 
flex-direction: column; /* alinha abaixo do outro */

h3{ 
  color: #20295F;
  padding: 10px;
} 


`

export const BottomCard = styled.div`
width: 100%; /* para entender onde inicia e finda a div */
display: flex;  /* Alinhar ao lado */
justify-content: space-around;

strong{
  color: #EE6B26;
  font-weight: bold;
}
 span{
height: 2px;
width: 30px;
   color: #707070;
 }

 #iconOk{
width: 20px;
height: 20px;
align-items: center;
}
#iconOkRed{
width: 20px;
height: 20px;
align-items: center;
}

#iconOkAmarelo{
width: 20px;
height: 20px;
align-items: center;
}


`
 