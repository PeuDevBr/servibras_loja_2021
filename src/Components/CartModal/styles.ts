import styled from "styled-components";

export const ModalContainer = styled.div`
  max-height: 450px;
  overflow-y: scroll; 
  overflow-x: hidden;

  .content {
    display: flex;
    align-items: center;
    border: solid 1px #adb5bd;
    border-radius: 0.3rem;
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
        font-size: 1.25rem;
      }

      button {
        font-size: 1.25rem;
        width: 3rem;
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
      margin-right: -1.0rem;

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
      background: #00b945;
      color: #FFF;
      height: 40px;
      width: 200px;
      border-radius: 0.3rem;
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
        background: #00792d;
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
      font-size: 0.9rem;

      .firstDiv {
        height: 5rem;

        img {
          height: 3rem;
          width: 3rem;
          margin-right: 0.7rem;
        }

        .code {
          margin-left: -1.3rem;
          order: 1;
          text-align: end;
          
        }

        .description {
          flex: 1;
          margin-left: -0rem;
          max-width: 10rem;
        }
      }

      .secondDiv {
        height: 2rem;
        font-size: 0.9rem;

        .changeAmountButtons {
          margin-left: -0.6rem;

          .amount {
            font-size: 1.2rem;
          }
        }

        .value {
          margin-left: -0.3rem;
        }

        .trashButton {
          margin-right: -0.4rem;
        }
      }
     
    }

    .sendDiv {
      justify-content: start;
      margin: auto;

      button {
        margin-right: 0.5rem;
        font-size: 1rem;
      }

      h4 {
        font-size: 1.15rem;
      }
    }
  }

  @media all and (max-width: 365px) {
    .content{
      flex-wrap: wrap;
      font-size: 0.9rem;

      .firstDiv {

        img {
          margin-right: 0.5rem;
        }

        .code {
          margin-left: -2.5rem;
          
        }

        .description {
          margin-left: -0.5rem;
          max-width: 9rem;
        }
      }

      .secondDiv {
        height: 2rem;
        font-size: 0.9rem;

        .changeAmountButtons {
          margin-left: -0.6rem;

          .amount {
            font-size: 1.2rem;
          }
        }

        .value {
          margin-left: -0.3rem;
        }

        .trashButton {
          margin-right: -0.4rem;
        }
      }
     
    }

    .sendDiv {
      justify-content: start;
      margin: auto;

      button {
        margin-right: 0.5rem;
        font-size: 1rem;
      }

      h4 {
        font-size: 1.15rem;
      }
    }
  }
`;
