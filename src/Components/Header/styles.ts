import styled from "styled-components";

export const Container = styled.div`
  /*background: linear-gradient(45deg, #96e6a1, #ebedee);
  box-shadow: 0 0.65rem 1.25rem rgba(0, 0, 0, 0.15);
  width: 100%;
  height: auto;*/
  display: grid;
  grid-template: 20vh 20vh 
  10vh/3fr 1fr;
  grid-template-areas:
    "h h"
    "m a"
    "f f";
`;

export const Content = styled.div`
  
`;
export const Heading = styled.a`
  height: 100%;
  grid-area: h;
`;

export const SearchContainer = styled.form`
   height: 100%;
        grid-area: m;
`;

export const SearchInput = styled.input`
  ::placeholder {
  }
`;

export const SearchButton = styled.button`
  &:hover {
  }
`;

export const MyCartContainer = styled.div`
  height: 100%;
  grid-area: m;
  button {
    div {
    }

    &:hover {
    }
  }
`;

/*@media (max-width: 768px) {

  }*/
