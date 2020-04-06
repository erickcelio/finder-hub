import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { userHasLoadedSelector } from 'store/modules/user/selectors'
import { repositoriesHasLoadedSelector } from 'store/modules/repositories/selectors'
import history from 'services/history'
import ROUTER_PATHS from 'constants/router'

// import { Container } from './styles';

const Profile = () => {
  const userHasLoaded = useSelector(userHasLoadedSelector)
  const repositoriesHasLoaded = useSelector(repositoriesHasLoadedSelector)

  useEffect(() => {
    if (!userHasLoaded || !repositoriesHasLoaded) {
      history.push(ROUTER_PATHS.HOME)
    }
  }, [userHasLoaded, repositoriesHasLoaded])

  return <div>asdas</div>
}

export default Profile
