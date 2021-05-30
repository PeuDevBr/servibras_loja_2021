import styled from "styled-components";

export const ModalContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
justify-items: center;
justify-content: center;

img {
  height: 25rem;
  width: 25rem;
}
`;


export const DescriptionContainer = styled.div`
display: block;
margin-top: 60px;

h2{
  margin-bottom: 1rem;
}
h3{
  margin-bottom: 1rem;
  color: #8d99ae;
}
p {
  width: 600px;
  color: #8d99ae;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}
`

export const ModalBackButton = styled.button`
margin-left: 20px;
padding: 12px 20px;
background: #e5383b;
font-size: 1.5rem;
border-radius: 5px;
color: #ffffff;
font-weight: 700;
margin-bottom: 0.3rem;
margin-top: 0.8rem;
transition: transform 0.5s;
border: none;
cursor: pointer;

&:hover {
  transform: scale(1.1);
}
`;

export const ButtonsContainer = styled.div`
display: flex;
`

export const ModalAcceptButton = styled.a`

padding: 8px 16px;
background: #52b788;
font-size: 1.5rem;
border-radius: 5px;
color: #ffffff;
font-weight: 700;
margin-bottom: 0.3rem;
margin-top: 0.8rem;
transition: transform 0.5s;
border: none;
text-decoration: none;
cursor: pointer;
display: flex;
align-items: center;

.icon {
  margin-left: 0.5rem;
}

&:hover {
  transform: scale(1.1);
}
`;