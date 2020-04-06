import React from 'react'
import { useForm } from 'react-hook-form'
import Input from 'components/Input'
import Button from 'components/Button'
import PropTypes from 'prop-types'

const UserForm = ({ onSubmit }) => {
  const {
    register,
    errors,
    handleSubmit,
    setError,
    clearError,
    control,
  } = useForm()

  const handleBeforeSubmit = (values) => {
    validateUsername(values.username)
    if (control.formState.isValid) {
      onSubmit(values)
    }
  }

  const validateUsername = (username = '') => {
    const isValid = username.length > 0
    if (!isValid) {
      setError([
        {
          type: 'required',
          name: 'username',
          message: 'Por favor preencha este campo!',
        },
      ])
    } else {
      clearError('username')
    }
    return isValid
  }

  return (
    <>
      <Input
        onChange={validateUsername}
        inputRef={register}
        name="username"
        isValid={!errors.username}
        invalidMessage={errors.username && errors.username.message}
        placeholder="Insira seu @ do GitHub"
      />
      <Button onClick={handleSubmit(handleBeforeSubmit)}>Localizar</Button>
    </>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default UserForm
