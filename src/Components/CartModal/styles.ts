import styled from "styled-components";

export const ModalContainer = styled.div`
  max-height: 450px;
  overflow-y: auto; 

  .sendDiv {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    width: 850px;
    margin-top: 2rem;

    button {
      border: none;
      background: #52b788;
      color: #FFF;
      height: 40px;
      width: 200px;
      border-radius: 0%.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.7s;

      span {
        font-size: 1.4rem;
        font-weight: 500;
        margin-right: 0.5rem;
      }

      &:hover {
        background: #36815e;
      }
    }

    h4 {
      height: 40px;
      font-size: 1.4rem;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.2rem;
  border: 1px solid gray;
  margin: 0.5rem;
  padding: 0.25rem;

  img {
    height: 4rem;
    width: 4rem;
  }

  button {
    font-size: 1.25rem;
    width: 1.5rem;
  }

  .code {
    width: 7rem;
  }

  .description {
    width: 15rem;
  }

  .value {
    width: 5rem;
  }

  div {
    display: flex;
    align-items: center;
    
    p {
      margin: 0.5rem;
    }
  }

  .trashButton {
    color: #e01e37;
    border: none;
    background: transparent;
    transition: transform 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      transform: scale(1.25);
    }
  }

  .incrementButton {
    border: none;
    background: transparent;
    transition: transform 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      transform: scale(1.25);
      color: #3e8914;
    }
  }

  .DecrementButton {
    border: none;
    background: transparent;
    transition: transform 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      transform: scale(1.25);
      color: #fc2f00;
    }
  }
`;
