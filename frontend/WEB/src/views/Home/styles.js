import styled from 'styled-components';

export const container = styled.div`
width: 100%;

`
export const FilterArea = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap; /* */
justify-content: space-around;
margin-top: 30px;


button{
 background: none;
 border: none;
}

`
export const content = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin-bottom: 100px;
text-align: center;
justify-content: center;
a{
  text-decoration:none;
  color:#000;
}

`

export const Title = styled.div`
margin-bottom: 20px;
width: 100%;
border-bottom: 1px solid #20295F;
display: flex; /* efeito de cotar as linhas */
justify-content: center;/* efeito de cotar as linhas */
h3{
  color: #20295F;
  position: relative;
  top: 30px; 
  background: #FFF; /* efeito de cotar as linhas */
  padding: 0px 20px; /* efeito de cotar as linhas */
}

`