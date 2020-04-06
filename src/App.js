import React from 'react'
import styled from '@xstyled/styled-components'
import { ThemeProvider } from 'styled-components'
import theme from './assets/styles/theme'
import GlobalStyle from './assets/styles/globalStyle'

export const Container = styled.div``

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>Finder hub</Container>
  </ThemeProvider>
)

export default App
