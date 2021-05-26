import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(4, 300px);
  justify-items: center;
  justify-content: center;
  margin-top: 120px;
`;
export const Box = styled.div`
  height: 320px; /* What??? */

  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  border: 20px;
  background: linear-gradient(45deg, #ebedee, #accbee);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
`;
export const H2 = styled.h2`
  position: absolute;
  top: 2px;
  right: 30px;
  font-size: 3.6rem;
  color: rgba(0, 0, 0, 0.02);
  transition: 0.7s;
  pointer-events: none;
`;

export const A = styled.a`
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: #ebf5fc;
  border-radius: 10px;
  color: #777;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 0.3rem;
  margin-top: 0.5rem;
  transition: 0.9s;
  outline: none;
  cursor: pointer;
`;
export const H3 = styled.h3`
  font-size: 1em;
  color: #777;
  min-height: 3.2rem;
  z-index: 1;
  transition: 0.7s;
`;

export const P = styled.p`
  font-size: 1em;
  font-weight: 300;
  color: #777;
  margin-top: 0.25rem;
  z-index: 1;

  transition: 0.7s;
`;

export const Content = styled.div`
  padding: 20px;
  text-align: center;
`;
export const Image = styled.img`
  height: 8rem;
  width: 8rem;
`;

export const Card = styled.div`
  position: relative;
  width: 260px;
  height: 360px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
    inset -5px -5px 5px rgba(225, 225, 225, 0.5),
    5px 5px 5px rgba(0, 0, 0, 0.05), -5px -5px 5px rgba(225, 225, 225, 0.5);
  border-radius: 15px;
  margin: 15px;

  &:hover {
    //${Box} {
      //transform: scale(1.25); //translateY(-50px);
      //box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      //background: linear-gradient(45deg, #accbee, #D7FFFE)
    //}
    ${H2} {
      //color: rgba(0, 0, 0, 0.1);
    }
    ${A} {
      background: #96e6a1;
    }
    ${H3} {
      //color: #FFF;
    }
    ${P} {
      //color: #FFF;
    }
  }
`;

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

  img {
    margin-left: 0.5rem;
    height: 50px;
    width: 50px;

  }

  &:hover {
    transform: scale(1.1);
  }
`;