import React from 'react'
import { ReactComponent as BackgroundPattern } from 'assets/images/background-pattern.svg'
import styled from '@xstyled/styled-components'

export const Container = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: fixed;

  svg {
    background-color: background;
    min-height: 100vh;
  }

  polygon {
    fill: background;
    stroke-width: 0.1;
    stroke: #000;
  }
`

const Background = () => (
  <Container>
    <BackgroundPattern />
  </Container>
)

export default Background
