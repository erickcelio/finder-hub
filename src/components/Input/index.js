import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  StyledInput,
  InvalidMessage,
  StyledLabel,
  InputContainer,
} from './styles'

const Input = ({ isValid, invalidMessage, label, placeholder, type }) => (
  <Container>
    <StyledLabel>{label}</StyledLabel>
    <InputContainer valid={isValid}>
      <StyledInput type={type} placeholder={placeholder} />
      <InvalidMessage show={!isValid}>{invalidMessage}</InvalidMessage>
    </InputContainer>
  </Container>
)

Input.propTypes = {
  invalidMessage: PropTypes.string,
  isValid: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

Input.defaultProps = {
  invalidMessage: '',
  isValid: true,
  label: '',
  placeholder: '',
  type: 'text',
}

export default Input
