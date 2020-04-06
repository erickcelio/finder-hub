import React from 'react'
import LogoImg from '../images/logo.png'
import history from 'services/history'
import ROUTER_PATHS from 'constants/router'
import styled from 'styled-components'

export const Img = styled.img`
  cursor: pointer;
`

export const Logo = () => (
  <Img
    id="logo"
    onClick={() => history.push(ROUTER_PATHS.HOME)}
    src={LogoImg}
  />
)
