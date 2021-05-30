import Modal from "react-modal";
import { FaCartPlus } from 'react-icons/fa';
import {ModalContainer, ModalBackButton, ModalAcceptButton, ButtonsContainer, DescriptionContainer } from "./styles";
import { formatPrice } from "../../util/format";
import { Message } from "../Message";
import { ToastContainer } from 'react-toastify';

Modal.setAppElement("body");

export function CardModal({isCardModalOpen, cardModal, handleCloseCardModal, setCart, cart}) {

  return (
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
            <h2>{formatPrice(cardModal.amount)}</h2>
          <ButtonsContainer>
            <ModalAcceptButton
              onClick={() =>{

                const productAlreadyInCart = cart.find(product => product.code === cardModal.code)

                if(!productAlreadyInCart) {
                  setCart([...cart, {...cardModal, quantity: 1}])
                  Message("Peça adicionada ao Carrinho", "success")
                }

                if(productAlreadyInCart) {

                  const updateCart = cart.map(cartItem => cartItem.code === cardModal.code ? {
                    ...cartItem,
                    quantity: Number(cartItem.quantity) +1
                  } : cartItem)

                  setCart(updateCart)
                  Message("Quantidade alterada no Carrinho", "info")
                }

                handleCloseCardModal()
              }}
            >
              Adicionar
              <FaCartPlus className="icon" size={28} color="#FFF" />
            </ModalAcceptButton >
            <ModalBackButton onClick={handleCloseCardModal}>
              Voltar
            </ModalBackButton>
          </ButtonsContainer>
          </DescriptionContainer>                     
        </div>
      </ModalContainer>
      <ToastContainer/>
    </Modal>
  )

}