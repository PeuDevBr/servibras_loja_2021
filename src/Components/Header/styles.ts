import styled from "styled-components"

export const Container = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 99; 
  width:100%;
  height: 6.8rem;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 100vw;
  max-width: 1440px;
  height: 6.25rem; /* What??? */
  margin-top: 0.2rem;
  margin-bottom: -0.5rem;
  top: 1.25rem;
  left: 1.25rem;
  right: 1.25rem;
  border: 1.25rem;
  background: linear-gradient(45deg, #96e6a1, #ebedee);
  box-shadow: 0 0.625rem 1.25rem rgba(0,0,0,0.1); 
  border-radius: 0.9375rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.7s;
  
`
export const Heading = styled.a`
  font-size: 2rem;
  color: #fff;
  border: 2px solid white;
  border-radius: 0.5rem;
  padding: 0.8rem;
  cursor: pointer;
  text-decoration: none;
`

export const SearchContainer = styled.form`
  display: flex;
  height: 2.5rem;
  width: 26.25rem;
  align-items: center;
  border-radius: 0.45rem;
  background: #FFF;
`

export const SearchInput = styled.input`
  border: none;
  height: 2.5rem;
  margin-left: 0.5rem;
  background: transparent;
  width: 20rem;
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
  width: 7.5rem;
  height: 1.6rem;
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
