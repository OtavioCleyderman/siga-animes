import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    margin: 0;
    padding: 1.0rem;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
`;

export const SubMenuHome = styled.div`
    width: 100%;
    margin: 1.5rem 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentHome = styled.div`
    width: 100%;
    margin: 1.5rem 0 0 0;
    display: flex;
    flex-direction: column;
`;

export const Divider = styled.hr`
  width: 100%;
  color: ${props => props.theme.colors.divider};
  border: 1px solid;
`;

export const Button = styled.button`
    border: 1px solid ${props => props.theme.colors.text};
    border-radius: 1rem;
    margin: 0 1rem 1.5rem 1rem;
    padding: .5rem;
    background: ${props => props.theme.colors.backgroundButton};
    color: ${props => props.theme.colors.text};
`;