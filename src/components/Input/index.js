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
  autocomplete,
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
        autocomplete={autocomplete}
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
  autocomplete: PropTypes.string,
}

Input.defaultProps = {
  invalidMessage: '',
  label: '',
  placeholder: '',
  type: 'text',
  autocomplete: 'off',
  onChange: () => {},
}

export default Input
