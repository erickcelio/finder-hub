import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styles'
import Loading from 'components/Loading'

const Button = ({ onClick, children, isLoading }) => (
  <StyledButton onClick={onClick}>
    <Loading loading={isLoading}>{children}</Loading>
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
}

export default Button
