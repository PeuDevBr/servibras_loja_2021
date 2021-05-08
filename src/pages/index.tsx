import Cards from "../Components/Cards";
import { Header } from "../Components/Header";
import products from "../../products.json";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.search.value;
    setSearch(value);    
  }
  return (
    <>
      <Header handleSubmit={(e) => handleSubmit(e)} />
      <Cards products={products} search={search} setSearch={setSearch}/>
    </>
  );
}
