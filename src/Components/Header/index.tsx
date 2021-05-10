import { scrollToTop } from "../../functions/scrollToTop";
import { Container, Content, Heading, SearchButton, SearchContainer, SearchInput } from "./styles";

export function Header({handleSubmit}){
  return (
      <Container>
        <Content>
          <Heading onClick={scrollToTop}>Servibras</Heading>
          <SearchContainer onSubmit={handleSubmit}>
            <SearchInput name="search" placeholder=" Pesquise por nome, marca, produto..."/>
            <SearchButton type="submit" value="">Pesquisar</SearchButton>
          </SearchContainer>
        </Content>
      </Container>
  )
}