import React, { useContext } from 'react';
import { Container, ImageUser, UserProfile, Link, LinkMenu, Divider, Nav, Logout } from './styles';
import Logo from '../../assets/logo-web.png';
import User from '../../assets/user.png';
import UserTest from '../../assets/user-teste.jfif';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import SearchBar from '../SearchBar'


function FixedMenu({ toggleTheme }) {



  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <img src={Logo} width="320rem" alt="logo Siga Animes" />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        offHandleColor='#000'
        handleDiameter={20}
        offColor={shade(0.15, colors.background)}
        onColor={colors.primary}
      />
      <UserProfile>
        <ImageUser src={UserTest} alt="Foto do perfil do usuário" />
        <Link href="#">Otávio Cleyderman</Link>
      </UserProfile>
      <SearchBar />
      <Divider />
      <Nav>
        <LinkMenu href="/home">Home</LinkMenu>
        <LinkMenu href="/seguindo">Seguindo</LinkMenu>
        <LinkMenu href="/categorias">Categorias</LinkMenu>
        <LinkMenu href="/forum">Fórum</LinkMenu>
        <LinkMenu href="/parceiros">Parceiros</LinkMenu>
        <LinkMenu href="/proximos-lancamentos">Próximos lançamentos</LinkMenu>
      </Nav>
      <Divider />
      <Nav>
        <LinkMenu href="/conta">Conta</LinkMenu>
        <LinkMenu href="/configurações">Configurações</LinkMenu>
        <LinkMenu href="/suporte">Suporte</LinkMenu>
        <Logout>Sair</Logout>
      </Nav>
    </Container>
  );
}

export default FixedMenu;