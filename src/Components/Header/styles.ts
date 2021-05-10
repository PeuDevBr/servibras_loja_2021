import styled from "styled-components"

export const Container = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 99; 
  width:100%;
  height: 110px;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 100vw;
  max-width: 1440px;
  height: 100px; /* What??? */
  margin-top: 0.2rem;
  margin-bottom: -0.5rem;
  top: 20px;
  left: 20px;
  right: 20px;
  border: 20px;
  background: linear-gradient(45deg, #96e6a1, #ebedee);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1); 
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.7s;
  
`
export const Heading = styled.h2`
  font-size: 2rem;
  color: #fff;
  border: 2px solid white;
  border-radius: 0.5rem;
  padding: 0.8rem;
`

export const SearchContainer = styled.form`
  display: flex;
  height: 40px;
  width: 420px;
  align-items: center;
  border-radius: 0.45rem;
  background: #FFF;
`

export const SearchInput = styled.input`
  border: none;
  height: 40px;
  margin-left: 0.5rem;
  background: transparent;
  width: 320px;
  outline: none;
  background: #fff;

  color: #adb5bd;
  font-size: 1.0rem;
  font-weight: 500;

  ::placeholder {
    color: #adb5bd;
    font-size: 1.0rem;
    font-weight: 500;
  }
`

export const SearchButton = styled.button`
  background: #fec89a;
  color: #6c757d;
  font-size: 1rem;
  font-weight: 500;
  width: 120px;
  height: 25px;
  margin-right: 1rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  transition: 0.7s;

  &:hover{
    background: #f4a261;
    transform: scale(1.15)
  }
`
