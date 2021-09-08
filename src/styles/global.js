import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  html {
    /* 1rem = 16px (User agent) = 100% (User agent) */
    font-size: 62.5%; /* 10px */
  }

  body, button, input, textarea { 
    background: ${props => props.theme.colors.background};
    font-size: clamp(14px, 1.6rem, 2vw);
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
  }

`

