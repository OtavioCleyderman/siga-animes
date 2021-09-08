import styled from 'styled-components'

export const Container = styled.div`
  margin: 1.0rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 25.0rem;
  height: 2.5rem;
  align-items: center;
  border-radius: 0 2.0rem 2.0rem 0;
  text-align: center;
  padding: 0;
  margin: 0;
  border: none;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.bgSearchBar};
  
`;

export const Img = styled.img`
  width: 3.0rem;
  height: 2.5rem;
  background: ${props => props.theme.colors.bgSearchBar};
  border: 1px 0 0 0 solid;
  border-radius: 2.0rem 0 0 2.0rem;
`;


export const ContainerSearch = styled.div`
  display: flex;
  border-radius: 2.0rem;
  padding: .5rem;
  background: ${props => props.theme.colors.bgSearchBar};
  border: 1px solid ${props => props.theme.colors.borderSearchBar};
`;