import { useState} from "react";
import { FaCartPlus } from 'react-icons/fa';
import initialProducts from "../../../initialProducts.json";
import { useProducts } from "../../hooks/ProductsContext";
import { formatPrice } from "../../util/format";
import { CardModal } from "../CardModal"
import { Message } from "../Message";
import { ToastContainer } from 'react-toastify';
import {A, P, Container, Card, Box, Content, H3, Image } from "./styles";


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
  //href={`https://api.whatsapp.com/send?1=pt_BR&phone=558299802-2266&text=Tenho interesse na peça: ${card.code} - ${card.name}`}

  return (
    <>
      <Container>
        {cardList.map((card) => {
          return (
            <Card key={card.code}>
              <Box>
                <Content>
                  <P>{card.brand}</P>
                  <Image 
                    src={`/images/parts/${card.code}.png`}
                    alt={card.name}
                  />

                  <H3>{card.name}</H3>
                  <P>{card.code}</P>
                  <P>{formatPrice(card.amount)}</P>
                  <div className="buttonsDiv">
                  <A
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
                    }}
                    className="add"
                    target="_blank"
                  >
                    Add
                    <FaCartPlus className="icon" size={16}  />
                  </A>
                  <A
                    onClick={() => {
                      setCardModal(card);
                      handleOpenCardModal();
                    }}
                    className="verify"
                    target="_blank"
                  >
                    Verificar
                  </A>
                  </div>
                </Content>
              </Box>
            </Card>
          );
        })}
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
    </>
  );
}
