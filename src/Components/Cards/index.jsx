import { useState} from "react";
import Modal from "react-modal";
import initialProducts from "../../../initialProducts.json";
import {
  A,
  P,
  Container,
  Card,
  Box,
  Content,
  H3,
  Image,
  ModalContainer,
  ModalBackButton,
  ModalAcceptButton,
  ButtonsContainer,
  DescriptionContainer
} from "./styles";



export default function Cards({ products, search }) {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [cardModal, setCardModal] = useState({});

  function handleOpenCardModal() {
    setIsCardModalOpen(true);
    Modal.setAppElement("body");
  }

  function handleCloseCardModal() {
    setIsCardModalOpen(false);
  }

  let cardList = [];

  if (search === "") {
    cardList = initialProducts
  } else {
    for (var part in products) {
      if (
        products[part].name.toUpperCase().includes(search) ||
        products[part].model.toUpperCase().includes(search) ||
        products[part].code.toUpperCase().includes(search) ||
        products[part].brand.toUpperCase().includes(search) ||
        products[part].subject.toUpperCase().includes(search) ||
        products[part].title.toUpperCase().includes(search)
      ) {
        cardList.push(products[part]);
      }
    }
  }

  //href={`https://api.whatsapp.com/send?1=pt_BR&phone=558299802-2266&text=Tenho interesse na peça: ${card.code} - ${card.name}`}

  return (
    <Container>
      {cardList.map((card) => {
        return (
          <Card key={card.code}>
            <Box>
              <Content>
                <P>{card.brand}</P>
                <Image src={`/images/parts/${card.code}.png`} />

                <H3>{card.name}</H3>
                <P>{card.code}</P>
                <P>R$ {card.cost}</P>
                <A
                  onClick={() => {
                    setCardModal(card);
                    handleOpenCardModal();
                  }}
                  className="button"
                  target="_blank"
                >
                  Verificar
                </A>
              </Content>
            </Box>
          </Card>
        );
      })}
      <Modal
        isOpen={isCardModalOpen}
        onRequestClose={handleCloseCardModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <ModalContainer>
          <div>
            <img src={`/images/parts/${cardModal.code}.png`} />
          </div>
          <div>
            <DescriptionContainer>
              <h1>{cardModal.name}</h1>
              <h3>{cardModal.brand}</h3>
              <h2>Código: {cardModal.code}</h2>
              <h3>{cardModal.version}</h3>
              <h2>R$ {cardModal.cost}</h2>
            <ButtonsContainer>
              <ModalAcceptButton
                href={`https://api.whatsapp.com/send?1=pt_BR& phone=558299802-2266&text=Olá! Quero solicitar a peça: ${cardModal. code} - ${cardModal.name} - ${cardModal.cost}`}
              >
                Solicitar Peça
                <img src={`/images/whatsapp.png`} alt="" />
              </ModalAcceptButton >
              <ModalBackButton onClick={handleCloseCardModal}>
                Voltar
              </ModalBackButton>
            </ButtonsContainer>
            </DescriptionContainer>                     
          </div>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
