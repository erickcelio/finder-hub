import { createGlobalStyle } from '@xstyled/styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1;
    color: white;
    background-color: background;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

export default GlobalStyle
