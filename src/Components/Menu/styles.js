import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 35rem;
  background: ${props => props.theme.colors.bgMenu};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageUser = styled.img`
  width: 7rem;
  border-radius: 50%;
  margin: 0 1.5rem 1.5rem 0;
`;

export const UserProfile = styled.div`
  margin-top: 2.0rem;
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`;

export const LinkMenu = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  margin: .8rem 0;
`;

export const Divider = styled.hr`
  width: 100%;
  color: ${props => props.theme.colors.divider};
  border: 1px solid;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.8rem 0 1.8rem 0;
`;

export const Logout = styled.button`
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: ${props => props.theme.colors.bgMenu};
  cursor: pointer;
`;