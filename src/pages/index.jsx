import Cards from "../Components/Cards";
import { HeaderGrid } from "../Components/HeaderGrid";
import products from "../../products.json";
import { useState } from "react";
import { scrollToTop } from "../util/scrollToTop";
import { createServer, Model } from "miragejs";
import { CartModal } from "../Components/CartModal";
import { ProductsProvider } from "../hooks/ProductsContext";
import Head from 'next/head'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: products,
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

export default function Home() {
  
  
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);


  /* ----------------------------------------- */

  /* function Storage(){

    const productAlreadyInCart = cart.find(product => product.code === card.code)

    if(!productAlreadyInCart) {
      setCart([...cart, {...card, quantity: 1}])
      Message("Peça adicionada ao Carrinho", "success")  
      setCookie(undefined, "loja_user_cart_code", card.code, {
        maxAge: 60 * 60 * 24, // 24 horas
      }) 
      setCookie(undefined, "loja_user_cart_amount", 1, {
        maxAge: 60 * 60 * 24, // 24 horas
      })                      
    }

    if(productAlreadyInCart) {

      const updateCart = cart.map(cartItem => cartItem.code === card.code ? {
        ...cartItem,
        quantity: Number(cartItem.quantity) +1
      } : cartItem)

      setCart(updateCart)
      Message("Quantidade alterada no Carrinho", "info")
    }                     
  
    console.log(parseCookies())
  }
 */

  /* ----------------------------------------- */

  function handleOpenCartModal() {
    setIsCartModalOpen(true);
  }

  function handleCloseCartModal() {
    setIsCartModalOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    scrollToTop();
    setSearch(event.target.search.value.toUpperCase());
    //event.target.search.value = ""  - apaga texto do input
    handleCloseCartModal();
  }
  return (
    <ProductsProvider>
      <Head>
        <title>Início | Loja Servibras</title>
      </Head>
      <HeaderGrid
        setSearch={setSearch}
        handleSubmit={(event) => handleSubmit(event)}
        handleOpenCartModal={handleOpenCartModal}
        cart={cart}
      />
      <Cards search={search} setCart={setCart} cart={cart} />
      <CartModal
        isCardModalOpen={isCartModalOpen}
        cart={cart}
        setCart={setCart}
        handleCloseCardModal={handleCloseCartModal}
      />
    </ProductsProvider>
  );
}
