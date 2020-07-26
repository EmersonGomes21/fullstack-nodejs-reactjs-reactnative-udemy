import styled from 'styled-components';
export const container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;


`
export const Form = styled.div`
width: 50%;
margin-bottom: 130px;
`
export const TypeIcons = styled.div`
flex-wrap: wrap; 
width: 100%;
display: flex;
justify-content: center;
.inative{
  opacity: 0.5;
}
button{
  background: none;
  border: none;
}

img{ 
  width: 50px;
  height: 50px;
  margin: 20px 5px;
  cursor: pointer;
   &:hover {
  opacity: 0.5; 
}
}

`
export const Input = styled.div`
width: 100%;
display: flex;
flex-direction: column;
span{
  font-weight: bold;
  color: #707070;
  margin-bottom: 5px;
}
input{
  font-weight: bold;
  font-size: 16px;
  padding: 13px;
  border: none;
  border-bottom: 1px solid #EE6B26;
  margin-bottom: 10px; 
  cursor: pointer;
  }
img{ 
  width: 20px;
  height: 20;
  position: relative;
  left: 96%;
  bottom: 33px;
}
`
export const TextArea = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;
font-weight: bold;

span{
  font-weight: bold;
  color: #707070;
  margin-bottom: 5px;
}
textArea{
  
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #EE6B26;
}
`
export const Options = styled.div`
position: relative;
width: 100%;

input{
  cursor: pointer;
  text-align: center;
  
}

span{
  width: 0%;
  font-size: 14px;
  padding-left: 5px;
}

button{
  width: 50%;
  left: 60%;
  cursor: pointer;
  position: relative;
  font-weight: bold;
  border: none;
  background: none;
  font-size: 14px;
  &:hover {
  opacity: 0.5; 
}
  
}
div{
display: flex;
align-items: center;
color: #EE6B26;
font-weight: bold;
}
`
export const Save = styled.div` 
width: 50%;

button{
  width:200%;
  left: 10px;
  cursor: pointer;
  position: relative;
  top: 40px;
  font-weight: bold;
  color: #FFF;
  border: none;
  background: #EE6B26;
  padding: 10px;
  font-size: 18px;
  border-radius: 20px;
  &:hover {
  opacity: 0.5; 
}
}

`