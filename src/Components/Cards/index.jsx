import { useState} from "react";
import Modal from "react-modal";
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
    /*cardList = [
      {
        name: "Placa Potência 220V",
        code: "W10446925",
        brand: "Brastemp/Consul",
        subject: "Máquina de Lavar, Lavadora, Maquina de lavar",
        model:
        "BWB11ABBNA, BWL11ABBNA, BWL11AR, BWK11ABBNA, CWG11AB, CWK12ABBNA, CWL10B, CWL75A, CWK11AB, CWC10AB, BWC11AB, BWC09AB, BWC10BB, BWC07A, BWC08A, BWC10A, BWB09AB, BWL09BBBNA, BWB08A, BWB08AB",
        cost: "180,00",
        title: "potencia",
      },
      {
        name: "Compressor 1/3+ R134A 220V",
        code: "W10393823",
        brand: "Embraco",
        subject: "Freezer",
        model: "FFI 12HBX",
        cost: "480,00",
        title: "Motor, Motor 1/3, , Motor 1/3+, Motor 1/3 +, motor freezer",
      },
      {
        name: "Tubulação de cobre 1/4 ",
        code: "100213250",
        brand: "Eluma",
        subject: "Split",
        model: "",
        cost: "100,00 (kg)",
        title:
          "Cano 1/4, Cano de Cobre, Cano de Cobre 1/4, Tubo 1/4, Instalação, Instalaçao, Instalacao",
      },
      {
        name: "Compressor Rotativo 9.000 Btus R22",
        code: "326053935",
        brand: "Brastemp/Consul",
        subject: "split, condicionador de ar, ar condicionado",
        model: "",
        cost: "550,00",
        title: "motor",
      },
      {
        name: "Kit Placa BWL11 - W10356413 W10301604 326064442 (Similar)",
        code: "7220060",
        brand: "Alado",
        subject: "multimarcas, similar, consul, brastemp",
        model: "BWL11AB",
        cost: "280,00",
        title: "placa potencia, placa interface, placa potência",
      },
      {
        name: "Kit Placa BWC10 Bivolt (Similar)",
        code: "1447",
        brand: "CP Placas",
        subject: "multimarcas, similar, consul, brastemp",
        model: "BWC10AB",
        cost: "150,00",
        title: "placa potencia, placa potência",
      },
      {
        name: "Placa Eletrônica LT12F",
        code: "70201326",
        brand: "Electrolux",
        subject: "Máquina de Lavar, Lavadora, Maquina de lavar",
        model: "LT12F",
        cost: "200,00",
        title: "potencia",
      },
      {
        name: "Trasmissão Completa",
        code: "70201828",
        brand: "Electrolux",
        subject: "lavadora, máquina de lavar, maquina de lavar",
        model: "",
        cost: "450,00",
        title: "mecanismo, mecanica, transmissao, mecânica",
      },
    ];*/
    return (
      <>
      </>
    )
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
  }  //href={`https://api.whatsapp.com/send?1=pt_BR&phone=558299802-2266&text=Tenho interesse na peça: ${card.code} - ${card.name}`  
}
