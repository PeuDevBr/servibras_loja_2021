import { scrollToTop } from "../../functions/scrollToTop";
import {
  Container,
  Content,
  Heading,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./styles";

export function Header({ handleSubmit, setSearch }) {
  function resetSearch() {
    setSearch("");
    scrollToTop();
  }

  return (
    <Container>
      <Content>
        <Heading onClick={resetSearch}>Servibras</Heading>
        <SearchContainer 
          onSubmit={handleSubmit}
        >
          <SearchInput
            name="search"
            placeholder=" Pesquise por nome, marca, produto..."
          />
          <SearchButton type="submit">Pesquisar</SearchButton>
        </SearchContainer>
      </Content>
    </Container>
  );
}
