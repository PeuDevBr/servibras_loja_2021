import { useEffect, useState } from "react";
import initialProducts from "../../../initialProducts.json";
import { useProducts } from "../../hooks/ProductsContext";
import { CardModal } from "../CardModal"
import { Message } from "../Message";
import { ToastContainer } from 'react-toastify';
import { Container } from "./styles";
import {setCookie, parseCookies} from "nookies";

export default function Cards({ search , setCart, cart}) {
  


  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [cardModal, setCardModal] = useState({});

  const products = useProducts();
  
  function handleOpenCardModal() {
    setIsCardModalOpen(true);
  }

  function handleCloseCardModal() {
    setIsCardModalOpen(false);
  }

  let cardList = [];

  if (search === "") {
    cardList = initialProducts;
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
  
  return (
    <Container>
      <div className="gridContainer">
      {cardList.map((card) => {
          return (

            <div key={card.code} className="productContainer">
              <div className="productContent">
    
                <span className="logo">{card.brand}</span>
                <img 
                  className="image"
                  src={`/images/parts/${card.code}.png`}
                  alt={card.name}
                />
                <h2 className="name">{card.name.toUpperCase()}</h2>
                <h2 className="code">{card.code}</h2>
                <h1 className="price">R$ {card.amount}</h1>
                <section>
                  <button 
                    className="cardButton"
                    id="add"
                    onClick={() =>{

                      const productAlreadyInCart = cart.find(product => product.code === card.code)
      
                      if(!productAlreadyInCart) {
                        setCart([...cart, {...card, quantity: 1}])
                        Message("Peça adicionada ao Carrinho", "success")                       
                      }
      
                      if(productAlreadyInCart) {
      
                        const updateCart = cart.map(cartItem => cartItem.code === card.code ? {
                          ...cartItem,
                          quantity: Number(cartItem.quantity) +1
                        } : cartItem)
      
                        setCart(updateCart)
                        Message("Quantidade alterada no Carrinho", "info")
                      }

                      setCookie(undefined, "loja_user_cart", JSON.stringify(cart), {
                        maxAge: 60 * 60 * 24, // 24 horas
                      })
                    
                      console.log(parseCookies())
                    }
                  }
                  >
                    ADICIONAR
                  </button>
                  <button 
                    className="cardButton"
                    id="verify"
                    onClick={() => {
                      setCardModal(card);
                      handleOpenCardModal();
                    }}
                  >
                    VERIFICAR
                  </button>
                </section>
    
              </div>
          </div>
      );
    })}      

      </div>
      <CardModal 
          isCardModalOpen={isCardModalOpen}
          cardModal={cardModal}
          handleCloseCardModal={handleCloseCardModal}
          setCart={setCart}
          cart={cart}
          search={search}
        />
        <ToastContainer/>
    </Container>
  );
}
