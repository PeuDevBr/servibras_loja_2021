import Cards from "../Components/Cards";
import { Header } from "../Components/Header";
import products from "../../products.json";
import { useState } from "react";
import { scrollToTop } from "../functions/scrollToTop";

export default function Home() {
  const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    scrollToTop();
    setSearch(event.target.search.value.toUpperCase());    
  }
  return (
    <>
      <Header setSearch={setSearch} handleSubmit={(event) => handleSubmit(event)}  />
      <Cards products={products} search={search}/>
    </>
  );
}
