import { A, P, Container, Card, Box, Content, H2, H3, Image} from "./styles"
import products from "./products.json"

export default function Cards() {
  return (
    <Container>
      {products.map(product => {
        return (
          <Card key={product.code}>
            <Box>
              <Content>
                <Image src={`/images/consul/${product.code}.png`}/>
                
                <H3>{product.name}</H3>
                <P>{product.code}</P>
                <P>R$ {product.cost}</P>
                <A href="#">Adicionar</A>
              </Content>
            </Box>
          </Card>
        )
      })}
    </Container>    
  )
}
