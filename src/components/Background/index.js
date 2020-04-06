import React from 'react'
import { ReactComponent as BackgroundPattern } from 'assets/images/background-pattern.svg'
import styled, { keyframes, css } from '@xstyled/styled-components'

const blink = keyframes`
  0% {
    stroke: black;
  }

  100% {
    stroke: red;
  }
`

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
    stroke: black;
    animation: ${blink} 1s forwards;

    ${(props) =>
      !props.animate &&
      css`
        animation: none;
      `}
  }
`

const Background = () => (
  <Container>
    <BackgroundPattern />
  </Container>
)

export default Background
