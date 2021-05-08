import { Container, Heading, SearchButton, SearchContainer, SearchInput } from "./styles";

export function Header({handleSubmit}){
  return (
      <Container>
        <Heading>Servibras</Heading>
        <SearchContainer onSubmit={handleSubmit}>
          <SearchInput name="search" placeholder=" Pesquise por nome, marca, produto..."/>
          <SearchButton type="submit">Pesquisar</SearchButton>
        </SearchContainer>
      </Container>
  )
}