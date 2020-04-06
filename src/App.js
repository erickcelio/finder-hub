import React from 'react'
import styled from '@xstyled/styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'assets/styles/globalStyle'
import Theme from 'assets/styles/theme'

export const Container = styled.div``

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Container>Finder hub</Container>
  </ThemeProvider>
)

export default App
