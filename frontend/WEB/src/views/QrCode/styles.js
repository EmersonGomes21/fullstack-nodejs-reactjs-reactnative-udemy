import styled from 'styled-components';

export const container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 70px;

`

export const content = styled.div`
margin: 30px 10px 10px 10px;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
h1{ 
  font-size: 28px;
  color:#EE6B26;
  height: 15px;
}
h3{ height: 20px;
  color: #20295f;
  
}

`

export const Cell = styled.div`
width: 100%;
height: 0%;
display: flex;
justify-content: center;

img{

padding: 0px 15px;
width: 45px;
height: 40%;
}

`
export const QrCodeArea = styled.div`
width: 100%;
display: flex;
justify-content: center;

`
export const ValidationCode = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;/* deixar a baixo do outro*/
margin: 20px; 
font-size: 18px;
align-items: center;

h5{
  margin: 0px;
  color: #20295f;
}
input{
padding: 4px 12px;
height: 20px;
margin: 15px;
text-align: center;
cursor: pointer;
}
button{
  padding: 7px;
  color: #fff;
  border: none;
  background: #EE6B26;
  cursor: pointer;
  border-radius: 15px;
  font-weight: bold;
  font-size: 14px;
  &:hover {
  opacity: 0.9; 
  background: #20295f;

}

}
`
