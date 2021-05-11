import { useState } from "react";
import Modal from "react-modal";
import { A, P, Container, Card, Box, Content, H3, Image } from "./styles";


export default function Cards({ products, search, setSearch }) {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  function handleOpenCardModal() {
    setIsCardModalOpen(true);
  }

  function handleCloseCardModal() {
    setIsCardModalOpen(false);
  }

  let cardList = [];
  setSearch(search.toUpperCase());

  for (var slice in products) {
    if (
      products[slice].name.toUpperCase().includes(search) ||
      products[slice].model.toUpperCase().includes(search) ||
      products[slice].code.toUpperCase().includes(search) ||
      products[slice].brand.toUpperCase().includes(search) ||
      products[slice].subject.toUpperCase().includes(search) ||
      products[slice].title.toUpperCase().includes(search)
    ) {
      cardList.push(products[slice]);
    }
  }

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
                <A href={`https://api.whatsapp.com/send?1=pt_BR&phone=558299802-2266&text=Tenho interesse na peça: ${card.code} - ${card.name}`} className="button" target="_blank">Verificar</A>
                
                <Modal
                  isOpen={isCardModalOpen}
                  onRequestClose={handleCloseCardModal}
                >
                  <h2>{card.name}</h2>
                </Modal>
                
              </Content>
            </Box>
          </Card>
        );
      })}
    </Container>
  );
}
