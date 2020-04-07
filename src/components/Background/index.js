import React from 'react'
import { ReactComponent as BackgroundPattern } from 'assets/images/background-pattern.svg'
import styled, { css } from '@xstyled/styled-components'
import { useSelector } from 'react-redux'
import {
  userHasErrorSelector,
  userHasLoadedWithSuccessSelector,
} from 'store/modules/user/selectors'
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

const Background = () => {
  const hasUserErrors = useSelector(userHasErrorSelector)
  const hasUserLodedWithSuccess = useSelector(userHasLoadedWithSuccessSelector)

  return (
    <Container
      animateError={hasUserErrors}
      animateSuccess={hasUserLodedWithSuccess}
    >
      <BackgroundPattern />
    </Container>
  )
}

export default Background
