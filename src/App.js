import React from 'react'
import styled from '@xstyled/styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'assets/styles/globalStyle'
import Theme from 'assets/styles/theme'
import Routes from 'routes'
import { Router } from 'react-router-dom'
import history from 'services/history'
import { Provider } from 'react-redux'
import store from 'store'
import Background from 'components/Background'

export const Container = styled.div``

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <Background />
      <GlobalStyle />
      <Container>Finder hub</Container>
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  </Provider>
)

export default App
