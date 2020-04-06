import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from 'components/Input'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
  userIsLoadingSelector,
  userHasErrorSelector,
  userErrorSelector,
} from 'store/modules/user/selectors'
import { repositoriesIsLoadingSelector } from 'store/modules/repositories/selectors'

const UserForm = ({ onSubmit }) => {
  const { register, errors, handleSubmit, setError } = useForm()

  const userIsLoading = useSelector(userIsLoadingSelector)
  const repositoriesIsLoading = useSelector(repositoriesIsLoadingSelector)
  const userHasError = useSelector(userHasErrorSelector)
  const userError = useSelector(userErrorSelector)

  const handleBeforeSubmit = (values) => {
    onSubmit(values)
  }

  useEffect(() => {
    if (userHasError) {
      setError([
        {
          name: 'username',
          message: userError.message,
        },
      ])
    }
  }, [userHasError])

  return (
    <>
      <Input
        inputRef={register({
          required: 'Por favor preencha este campo!',
        })}
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
