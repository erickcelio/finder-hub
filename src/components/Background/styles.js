import styled, { css } from '@xstyled/styled-components'
import Theme from 'assets/styles/theme'

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
    stroke: ${Theme.colors.black};
    animation-duration: 3s;

    ${(props) =>
      props.animateError &&
      css`
        animation-name: blink-error;
        animation-play-state: running;
      `}

    ${(props) =>
      props.animateSuccess &&
      css`
        animation-name: blink-success;
        animation-iteration-count: infinite;
        animation-play-state: running;
      `}
  }

  @keyframes blink-error {
    0% {
      stroke: black;
    }

    50% {
      stroke: ${Theme.colors.red};
    }

    100% {
      stroke: black;
    }
  }

  @keyframes blink-success {
    0% {
      stroke: black;
    }

    50% {
      stroke: ${Theme.colors.primary};
    }

    0% {
      stroke: black;
    }
  }
`
