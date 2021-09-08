import React from 'react';
import { Container, ContainerSearch, Img, Input } from './styles';
import search from '../../assets/search-icon.png'

function SearchBar() {
  return (
    <Container>

      <form name="formSearch" id="formSearch" method="post">
        <ContainerSearch>
          <Img src={search} alt="" />
          <Input type="search" name="search" id="search" placeholder="Busque pelo nome ou gênero " />
        </ContainerSearch>

      </form>
    </Container>
  );
}

export default SearchBar;