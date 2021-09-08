import React from 'react';
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Login from './Pages/Login'
import Register from './Pages/Register'
import usePersistedState from './utils/usePersistedState'
import FixedMenu from './Components/Menu'
import styled from 'styled-components'
import Home from './Pages/Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const ContainerApp = styled.div`
  display: flex;
`;

const ContainerPages = styled.div`
  display: flex;
`;


const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  // depois verificar sobre useCallback, melhor aplicação nesse caso
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <ContainerApp>
        <Router> {/* Inicia a região onde pode haver troca dinâmica de elementos */}
          <GlobalStyle />
          <FixedMenu toggleTheme={toggleTheme} />
          <ContainerPages id="routed" >
            <Switch> {/* Determina qual elemento será exibido, de acordo com a rota */}

              <Route path="/home"> {/* Inserindo a rota */}
                <Home />
              </Route>

              <Route path="/seguindo"> {/* Inserindo a rota */}
                <Register />
              </Route>

              {/* :id é um parâmetro (espécie de variável de rota) */}
              <Route path="/edit/:id">
                <div />
              </Route>

            </Switch>
          </ContainerPages>

        </Router>
      </ContainerApp>
    </ThemeProvider >
  );
}


export default App;


