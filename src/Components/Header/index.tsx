import { FaCartArrowDown, FaShoppingCart } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi'
import { scrollToTop } from "../../util/scrollToTop";
import {
  Container,
  Content,
  Heading,
  MyCartContainer,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./styles";

export function Header({ handleSubmit, setSearch, handleOpenCartModal, cart }) {
  const cartSize = cart.length;

  function resetSearch() {
    setSearch("");
    scrollToTop();
  }

  return (
    <Container>
      <Content>
        <Heading onClick={resetSearch}>Servibras</Heading>
        <SearchContainer onSubmit={handleSubmit}>
          <SearchInput
            placeholder=" Pesquise por nome, marca, produto..."
            name="search"
          />
          <SearchButton type="submit">
            <BiSearchAlt2 size={30}/>
          </SearchButton>
        </SearchContainer>
        <MyCartContainer>
          <button className="myCart" onClick={handleOpenCartModal}>
            <div>
              <span>Carrinho</span>             
              <p>
                {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
              </p>
            </div>
            <span>
              {cartSize >= 1 
              ? <FaCartArrowDown size={36} /> 
              : <FaShoppingCart size={36} />}
            </span>  
          </button>
        </MyCartContainer>
      </Content>
    </Container>
  );
}
