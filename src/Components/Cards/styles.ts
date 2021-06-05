import styled from "styled-components";

export const Container = styled.div`
  width:99%;
  display: flex;
  justify-content: center;
  
    .gridContainer {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      width: 99vw;
      max-width: 1440px;

      justify-content: center;
    }

    .productContainer {
      height: 370px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
        
    .productContent {
       width: 240px;
      height: 340px;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border-radius: 1.2rem;
      padding-top: 0.5rem;
      padding-bottom: 1.5rem;
    }

    .code {
      font-size: 0.8rem;
    }

    .name {
      min-height: 4rem;
      font-size: 1rem;
      padding: 0.2rem;
      text-align: center;
    }

    .logo {
      font-size: 0.7rem;
      font-weight: 500;
    }

    img {
      height: 6rem;
      width: 6rem;
    }

    .price {
      color: #5a5a5a;
      font-size: 2rem;
    }

    .cardButton {
      font-weight: 500;
      border: none;
      height: 2.5rem;
      width: 6rem;
      background: #ffc700;
      color: #000;
      border-radius: 1rem;

      & + button {
        margin-left: 0.5rem;
      }

      &:hover {
        color: #fff;
        background: #43cc6d;
      }
    }
  
  @media all and (max-width: 510px) {
    .gridContainer {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
    .productContainer {
      height: 280px;
      width: 170px;
      margin-left: auto;
      margin-right: auto;
    }
        
    .productContent {
      width: 170px;
      height: 260px;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border-radius: 1.2rem;
      padding-top: 0.5rem;
      padding-bottom: 1.5rem;
    }

    .name {
      font-size: 0.8rem;
      min-height: 3.5rem;
      padding: 0.2rem;
      text-align: center;
    }

    .code {
      font-size: 0.7rem;
      margin-top: 0.5rem;
    }

    .logo {
      font-weight: 500;
    }

    img {
      height: 3.7rem;
      width: 3.7rem;
    }

    .price {
      color: #5a5a5a;
      font-size: 1.5rem;
      margin-bottom: 0.3rem;
    }

    section {
      display: flex;
      flex-direction: column;

      .cardButton {
        font-weight: 500;
        border: none;
        height: 1.8rem;
        width: 6rem;
        background: #ffc700;
        color: #000;
        border-radius: 1rem;
        font-size: 0.7rem;

        & + button {
          margin-left: 0;
          margin-top: 0.5rem;
        }

        &:hover {
          color: #fff;
          background: #43cc6d;
        }
      }
    }
  }
`;