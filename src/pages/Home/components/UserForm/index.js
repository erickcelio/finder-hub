import React from 'react'
import { useForm } from 'react-hook-form'
import Input from 'components/Input'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { userIsLoadingSelector } from 'store/modules/user/selectors'
import { repositoriesIsLoadingSelector } from 'store/modules/repositories/selectors'

const UserForm = ({ onSubmit }) => {
  const {
    register,
    errors,
    handleSubmit,
    setError,
    clearError,
    control,
  } = useForm()

  const userIsLoading = useSelector(userIsLoadingSelector)
  const repositoriesIsLoading = useSelector(repositoriesIsLoadingSelector)

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
      <Button
        isLoading={userIsLoading || repositoriesIsLoading}
        onClick={handleSubmit(handleBeforeSubmit)}
      >
        Localizar
      </Button>
    </>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default UserForm
