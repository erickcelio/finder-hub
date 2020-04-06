import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styles'

const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Button
