import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    /* a cada 1rem será consideradi 10px */
    //font-size: 62.5%;
    background: #dee2e6;
  }


  .buttonContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      padding: 0.5rem;
      font-size: 1.5rem;
      border: 1px solid;
      border-radius: 0.5rem;
    }

    button {
      border: none;
      background: transparent;
      cursor: pointer;
      transition: 0.5s;

      .closeButton {
        color: #e01e37;
      }

      &:hover {
        transform: scale(1.2);
      }
    }
    

  }
  
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

  }
  .react-modal-content {
    width: 100%;
    padding: 20px;
    max-width: 1000px;
    background: #fdfffc;
    outline: none;

    border-radius: 10px;

  }
`;
