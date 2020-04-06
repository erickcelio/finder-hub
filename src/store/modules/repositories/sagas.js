import { takeLatest, put } from 'redux-saga/effects'
import { REPOSITORIES_REQUEST_LOAD } from 'store/types'
import {
  repositoriesIsLoadingAction,
  repositoriesRequestSuccessAction,
} from './actions'

function* loadRepositories() {
  yield put(repositoriesIsLoadingAction())

  const repositories = {}

  yield put(repositoriesRequestSuccessAction(repositories))
}

const locationSagas = [takeLatest(REPOSITORIES_REQUEST_LOAD, loadRepositories)]

export default locationSagas
