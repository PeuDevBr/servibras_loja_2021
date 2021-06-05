import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height: 100px;
  display: flex;
  justify-content: center;

  top: 1.25rem;
  left: 1.25rem;
  right: 1.25rem;
  border: 1.25rem;
  background: linear-gradient(45deg, #96e6a1, #ebedee);
  box-shadow: 0 0.625rem 1.25rem rgba(0,0,0,0.1); 
  border-radius: 0.9375rem;

  .container {
    margin: 1rem;
    width: 100vw;
    max-width: 1440px;
    display: flex;
    justify-content: center;

    div {
      flex: 1;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.8rem;
    }

    .logo > span {
      color: #fff;
      font-size: 2rem;
      border: 2px solid #fff;
      border-radius: 1rem;
      padding: 0.3rem 1rem;
    }

    .search {
      flex: 6;

      form {
        min-width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 1rem;

        input {
          width: 80%;
          font-size: 1rem;
          border: none;
          margin-left: 5%;
        }

        button {
          width: 15%;
          border: none;
          background: transparent;
        }
      }
    }

    .cart > button {
      width: 50%;
      margin-top: 0.5rem;
      background: transparent;
      border: none;
      cursor: pointer;

      .amount {
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        margin-left: -1.3rem;
        margin-top: -0.4rem;
      }
    }
  }  

  @media all and (max-width: 880px) {
    .container > .search {
      
      form {
        min-width: 75%;
        
        input {
          font-size: 0.8rem;
        }
      }
    }
    
  }

  @media all and (max-width: 685px) {
    .container > .search {
      
      form {
        min-width: 85%;
        
        input {
          font-size: 0.8rem;
        }
      }
    }
    
  }

  @media all and (max-width: 555px) {
    .container {
      flex-wrap: wrap; 
      /* habilita quebra de linha quando o elemento ultrapassa a largura do container */
    }

    .container > div {
      flex: 1 1 50%;
      /* configura a largura mínima da div como 50% da largura do 
      container*/
    }

    .logo > span {
      color: #fff;
      font-size: 3rem;
      border: 2px solid #fff;
      border-radius: 1rem;
      margin-right: -9rem;
    }

    .container > .search {
      order: 1; 
      /* altera a ordem do search para ficar como último elemento */
      form {
        min-width: 100%;
        
        input {
          font-size: 1rem;
        }
      }
    }

    .cart {
      padding-left: 5.2rem;
    }
  }
`