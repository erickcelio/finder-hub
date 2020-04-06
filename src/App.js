import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'assets/styles/globalStyle'
import Theme from 'assets/styles/theme'
import Routes from 'routes'
import { Router } from 'react-router-dom'
import history from 'services/history'
import { Provider } from 'react-redux'
import store from 'store'
import Background from 'components/Background'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <Background />
      <GlobalStyle />
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  </Provider>
)

export default App
