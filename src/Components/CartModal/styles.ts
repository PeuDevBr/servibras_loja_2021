import styled from "styled-components";

export const ModalContainer = styled.div`
  max-height: 450px;
  overflow-y: auto; 

  .content {

    display: flex;
    align-items: center;
    border: 1px solid gray;
    margin: 0.5rem;
    padding: 0.25rem;

  .firstDiv {
    display: flex;
    flex: 1;
    height: 4rem;
    justify-content: space-around;
    align-items: center;
  

    img {
      height: 4rem;
      width: 4rem;
    }

    .code {
      width: 7rem;
    }

    .description {
      width: 15rem;
    }
  }

  .secondDiv {
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    
    
    .value {
      width: 5rem;
    }

    .changeAmountButtons {
      display: flex;
      align-items: center;
      
      .amount {
        margin: 0.5rem;
      }

      button {
        font-size: 1.25rem;
        width: 1.5rem;
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
  }
}

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

  @media all and (max-width: 555px) {
    .content{
      flex-wrap: wrap;
      font-size: 0.8rem;

      .firstDiv {
        margin-left: -0.5rem;

        img {
          height: 2rem;
          width: 2rem;
          margin-right: 0.5rem;
        }
      }

      .code {
        margin-left: -0.5rem;
      }

      .description {
       margin-left: -1.1rem;
       max-width: 8rem;
      }
      
    }
  }
`;
