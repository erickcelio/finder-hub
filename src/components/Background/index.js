import React from 'react'
import { ReactComponent as BackgroundPattern } from 'assets/images/background-pattern.svg'
import { useSelector } from 'react-redux'
import {
  userHasErrorSelector,
  userHasLoadedWithSuccessSelector,
} from 'store/modules/user/selectors'
import { Container } from './styles'

const Background = () => {
  const hasUserErrors = useSelector(userHasErrorSelector)
  const hasUserLodedWithSuccess = useSelector(userHasLoadedWithSuccessSelector)

  return (
    <Container
      animateError={hasUserErrors}
      animateSuccess={hasUserLodedWithSuccess}
    >
      <BackgroundPattern />
    </Container>
  )
}

export default Background
