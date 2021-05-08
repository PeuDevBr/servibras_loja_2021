import styled from "styled-components"

export const Container = styled.div`
  height: 120px; /* What??? */
  margin-top: 1rem;
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
  font-size: 3rem;
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
