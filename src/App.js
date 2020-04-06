import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'assets/styles/globalStyle'
import Theme from 'assets/styles/theme'
import Routes from 'routes'
import { Router } from 'react-router-dom'
import history from 'services/history'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import Background from 'components/Background'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={Theme}>
        <Background />
        <GlobalStyle />
        <Router history={history}>
          <Routes />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
)

export default App
