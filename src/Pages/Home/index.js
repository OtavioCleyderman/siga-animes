import React from 'react';
import { Container, SubMenuHome, ContentHome, Button, Divider } from './styles';
import  CarouselPages from '../../Components/Carousel'

function Home() {
  return (
    <Container>
      <CarouselPages />
      <SubMenuHome>
        <Button>Mais vistos</Button>
        <Button>Os melhores</Button>
        <Button>Para descobrir</Button>
        <Button>Lançamentos</Button>
      </SubMenuHome>
      <ContentHome>
        Mais vistos
        <Divider />
      </ContentHome>
    </Container>
  );
}

export default Home;