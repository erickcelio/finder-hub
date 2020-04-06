import React from 'react'
import styled from '@xstyled/styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'assets/styles/globalStyle'
import Theme from 'assets/styles/theme'
import Routes from 'routes'
import { Router } from 'react-router-dom'
import history from 'services/history'

export const Container = styled.div``

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Container>Finder hub</Container>
    <Router history={history}>
      <Routes />
    </Router>
  </ThemeProvider>
)

export default App
