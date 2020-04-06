import React from 'react'
import LogoImg from '../images/logo.png'
import history from 'services/history'
import ROUTER_PATHS from 'constants/router'

export const Logo = () => (
  <img
    id="logo"
    onClick={() => history.push(ROUTER_PATHS.HOME)}
    src={LogoImg}
  />
)
