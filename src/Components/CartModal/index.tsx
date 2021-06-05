import Modal from "react-modal";
import { FaWindowClose } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiOutlineMinusCircle, AiOutlinePlusCircle, AiFillCloseCircle } from 'react-icons/ai';
import { formatPrice } from "../../util/format";
import { ModalContainer } from "./styles";
import { Message } from "../Message";

Modal.setAppElement("body");

export function CartModal({
  isCardModalOpen,
  handleCloseCardModal,
  cart,
  setCart,
}) {
  const cartSize = cart.length;

  const message = {
    1: "W10446925 - PLACA POTENCIA - 180,00",
    2: "70201326 - PLACA ELETRONICA - 200,00"
  }  

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.amount),
    subTotal: formatPrice(product.amount * product.quantity),
  }));

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      sumTotal += product.amount * product.quantity;

      return sumTotal;
    }, 0)
  );

  const removeProduct = (productCode: string) => {
    const productExists = cart.some(
      (cartProduct) => cartProduct.code === productCode
    );

    if (productExists) {
      const updatedCart = cart.filter(
        (cartProduct) => cartProduct.code !== productCode
      );
      setCart(updatedCart);
    }
  };

  const updateProductQuantity = ({ productCode, newQuantity }) => {
    const productExists = cart.some(
      (cartProduct) => cartProduct.code === productCode
    );

    if (productExists) {
    }
    const updatedCart = cart.map((cartItem) =>
      cartItem.code === productCode
        ? {
            ...cartItem,
            quantity: newQuantity,
          }
        : cartItem
    );

    setCart(updatedCart);
  };

  return (
    <Modal
      isOpen={isCardModalOpen}
      onRequestClose={handleCloseCardModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className="buttonContainer">
        <h3>Lista de Compras</h3>
        <button onClick={handleCloseCardModal}>
          <FaWindowClose className="closeButton" size={30}/>
        </button>
      </div>
      <ModalContainer>
        {cartFormatted.map((product) => {
          return (
            <div className="content" key={product.code}>

              <div className="firstDiv">
                <img
                  src={`/images/parts/${product.code}.png`}
                  alt={product.name}
                />
                <p className="code">{product.code} </p>
                <p className="description">{product.name} </p>
              </div>

              <div className="secondDiv">
                <p className="value">{product.priceFormatted}</p>
                <div className="changeAmountButtons">
                  <button
                    className="DecrementButton"
                    type="button"
                    disabled={product.quantity <= 1}
                    onClick={() => {
                      const DecrementArguments = {
                        productCode: product.code,
                        newQuantity: product.quantity - 1,
                      };
                      updateProductQuantity(DecrementArguments)
                    }}
                  >
                    <AiOutlineMinusCircle size={34}/>
                  </button>
                  <p className="amount">{product.quantity}</p>
                  <button
                    className="incrementButton"
                    onClick={() => {
                      const IncrementArguments = {
                        productCode: product.code,
                        newQuantity: product.quantity + 1,
                      };
                      updateProductQuantity(IncrementArguments)
                    }}
                  >
                    <AiOutlinePlusCircle size={34}/>
                  </button>
                </div>
                <p className="value">{product.subTotal}</p>
                <button
                  className="trashButton"
                  type="button"
                  onClick={() => {
                    removeProduct(product.code);
                  }}
                >
                  <AiFillCloseCircle size={30}/>
                </button>
              </div>
            </div>
          );
        })}
        <div className="sendDiv">
          <button 
            type="button"
            onClick={() => {
              var texto = `
                Olá, quero solicitar as seguintes peças:
                ${cartFormatted.map((product) => {
                  return " \n\ " + product.code +" - " + product.name +" - " + product.priceFormatted +" - " + product.quantity + " unid." +" - " + product.subTotal + " \n\ "
            })} 
            Total: ${total}`
              if(cartSize > 0) {
                texto = window.encodeURIComponent(texto);
                window.open("https://api.whatsapp.com/send?phone=" + "558299802-2266" + "&text=" + texto, "_blank");
              } else {
                Message("Carrinho vazio.", "warn")
              }
            }}
          >
            <span>{cartSize > 1 
              ? "Solicitar Peças"
              : "Solicitar Peça"}
            </span>
            <RiWhatsappFill size={30}/>
          </button>
          <h4>{total}</h4>
        </div>
      </ModalContainer>
    </Modal>
  );
}
