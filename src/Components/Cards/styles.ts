import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(4, 300px);
  justify-items: center;
  justify-content: center;
  margin-top: 10px;
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
padding: 6px 12px;
  background: #ebf5fc;
  border-radius: 10px;
  color: #777;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 0.3rem;
  margin-top: 0.5rem;
  transition: 0.7s;
  outline: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  .icon{
    margin-left: 0.3rem;
  }
  
  &+A{
    margin-left: 0.5rem;
  }
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

  .buttonsDiv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  transition: 0.7s;

  &:hover {
    ${A} {
      background: #52b788;
      color: #FFF;
    }    
  }

  .add {
      &:hover{
        transform: scale(1.1);
      }
    }

  .verify {
    &:hover{
      transform: scale(1.1);
    }
  }
`;
