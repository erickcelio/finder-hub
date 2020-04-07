import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { userHasLoadedSelector } from 'store/modules/user/selectors'
import { repositoriesHasLoadedSelector } from 'store/modules/repositories/selectors'
import history from 'services/history'
import ROUTER_PATHS from 'constants/router'
import { Container, Header } from './styles'
import { Logo } from 'assets/styles'
import UserProfile from './components/UserProfile'
import RepositoriesList from './components/RepositoriesList'
import { ReactComponent as ArrowLeftIcon } from 'assets/images/icons/arrow-left.svg'

const Profile = () => {
  const userHasLoaded = useSelector(userHasLoadedSelector)
  const repositoriesHasLoaded = useSelector(repositoriesHasLoadedSelector)

  const goToHomePage = () => history.push(ROUTER_PATHS.HOME)

  useEffect(() => {
    if (!userHasLoaded || !repositoriesHasLoaded) {
      goToHomePage()
    }
  }, [userHasLoaded, repositoriesHasLoaded])

  return (
    <Container>
      <Header>
        <ArrowLeftIcon id="arrow-back" onClick={goToHomePage} />
        <Logo />
      </Header>
      <UserProfile />
      <RepositoriesList />
    </Container>
  )
}

export default Profile
