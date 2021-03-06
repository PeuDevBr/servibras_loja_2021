import styled from "styled-components";

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  justify-content: center;

  img {
    height: 25rem;
    width: 25rem;
  }

  .descriptionContainer {
    display: block;
    margin-top: 60px;

    h2{
      margin-bottom: 1rem;
    }
    h3{
      margin-bottom: 1rem;
      color: #8d99ae;
    }
    p {
      width: 600px;
      color: #8d99ae;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .value {
      font-size: 4rem;
      color: #5a5a5a;
    }
  }


  .modalBackButton{
    margin-left: 20px;
    padding: 12px 20px;
    background: #e01e37;
    font-size: 1.5rem;
    border-radius: 0.3rem;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 0.3rem;
    margin-top: 0.8rem;
    transition: transform 0.5s;
    border: none;
    cursor: pointer;

    &:hover {
      background: #99001c;
    }
  }

  .buttonsContainer {
    display: flex;
  }

  .modalAcceptButton {
    padding: 8px 16px;
    background: #00b945;
    font-size: 1.5rem;
    border-radius: 0.3rem;
    color: #fff;
    font-weight: 700;
    margin-bottom: 0.3rem;
    margin-top: 0.8rem;
    transition: transform 0.5s;
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      background: #00792d;
    }
  }

  @media all and (max-width: 555px) {
    grid-template-columns: repeat(1, 1fr);

    img {
      height: 13rem;
      width: 13rem;
    }

    .descriptionContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: -0.5rem;

      .name {
        text-align: center;
      }

      .code {
        margin-top: 1rem;
      }
    }

    .buttonsContainer {
      display: flex;
      justify-content: center;
    }
  }
`;