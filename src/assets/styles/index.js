import React from 'react'
import { ReactComponent as LogoImg } from '../images/logo.svg'
import history from 'services/history'
import ROUTER_PATHS from 'constants/router'
import styled from '@xstyled/styled-components'

export const Container = styled.div`
  cursor: pointer;

  path {
    fill: primary;
  }
`

export const Logo = () => (
  <Container>
    <LogoImg
      id="logo"
      data-testid="logo"
      onClick={() => history.push(ROUTER_PATHS.HOME)}
    />
  </Container>
)
