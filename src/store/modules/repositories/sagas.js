import { takeLatest, put, call } from 'redux-saga/effects'
import { REPOSITORIES_REQUEST_LOAD } from 'store/types'
import {
  repositoriesIsLoadingAction,
  repositoriesRequestSuccessAction,
} from './actions'
import { getUserRepositoriesByUsernameService } from 'services/user'
import ROUTER_PATHS from 'constants/router'
import history from 'services/history'

function* loadRepositories({ username }) {
  yield put(repositoriesIsLoadingAction())

  const repositories = yield getUserRepositoriesByUsernameService(username)

  yield put(repositoriesRequestSuccessAction(repositories))

  yield call(history.push, ROUTER_PATHS.PROFILE)
}

const locationSagas = [takeLatest(REPOSITORIES_REQUEST_LOAD, loadRepositories)]

export default locationSagas
