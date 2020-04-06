import React from 'react'
import { ReactComponent as BackgroundPattern } from 'assets/images/background-pattern.svg'
import styled, { css } from '@xstyled/styled-components'
import { useSelector } from 'react-redux'
import {
  userHasErrorSelector,
  userHasLoadedWithSuccessSelector,
  userIsLoadingSelector,
} from 'store/modules/user/selectors'
import Colors from 'assets/styles/colors'

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
    stroke: ${Colors.black};
    animation-duration: 6s;

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
        animation-play-state: running;
      `}
  }

  @keyframes blink-error {
    0% {
      stroke: black;
    }

    50% {
      stroke: ${Colors.red};
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
      stroke: ${Colors.malachite};
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
