import React from 'react'
import { Container, FormContainer } from './styles'
import { Logo } from 'assets/styles'
import UserForm from './components/UserForm'
import { useDispatch } from 'react-redux'
import { userRequestLoadAction } from 'store/modules/user/actions'

const Home = () => {
  const dispatch = useDispatch()

  const handleFormSubmit = ({ username }) => {
    dispatch(userRequestLoadAction({ username }))
  }

  return (
    <Container>
      <FormContainer>
        <Logo />
        <UserForm onSubmit={handleFormSubmit} />
      </FormContainer>
    </Container>
  )
}

export default Home
