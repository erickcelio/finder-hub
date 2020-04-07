import React, { useEffect } from 'react'
import { Container, FormContainer } from './styles'
import { Logo } from 'assets/styles'
import UserForm from './components/UserForm'
import { useDispatch } from 'react-redux'
import {
  userRequestLoadAction,
  userResetAction,
} from 'store/modules/user/actions'

const Home = () => {
  const dispatch = useDispatch()

  const handleFormSubmit = ({ username }) => {
    dispatch(userRequestLoadAction({ username }))
  }

  useEffect(() => {
    dispatch(userResetAction())
  }, [])

  return (
    <Container>
      <FormContainer data-testid="user-form">
        <Logo />
        <UserForm onSubmit={handleFormSubmit} />
      </FormContainer>
    </Container>
  )
}

export default Home
