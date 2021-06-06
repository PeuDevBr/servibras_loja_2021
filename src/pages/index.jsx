import Cards from "../Components/Cards";
import { HeaderGrid } from "../Components/HeaderGrid";
import products from "../../products.json";
import { useEffect, useState } from "react";
import { scrollToTop } from "../util/scrollToTop";
import { createServer, Model } from "miragejs";
import { CartModal } from "../Components/CartModal";
import { ProductsProvider } from "../hooks/ProductsContext";

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
