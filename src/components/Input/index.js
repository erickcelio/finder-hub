import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  StyledInput,
  InvalidMessage,
  StyledLabel,
  InputContainer,
} from './styles'

const Input = ({
  onChange,
  inputRef,
  isValid,
  invalidMessage,
  label,
  placeholder,
  type,
  name,
}) => (
  <Container>
    <StyledLabel>{label}</StyledLabel>
    <InputContainer valid={isValid}>
      <StyledInput
        onChange={(e) => onChange(e.target.value)}
        ref={inputRef}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <InvalidMessage show={!isValid}>{invalidMessage}</InvalidMessage>
    </InputContainer>
  </Container>
)

Input.propTypes = {
  onChange: PropTypes.func,
  inputRef: PropTypes.any,
  invalidMessage: PropTypes.string,
  isValid: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
}

Input.defaultProps = {
  invalidMessage: '',
  label: '',
  placeholder: '',
  type: 'text',
  onChange: () => {},
}

export default Input
