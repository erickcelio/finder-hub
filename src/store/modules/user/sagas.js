import { takeLatest, put } from 'redux-saga/effects'
import { USER_REQUEST_LOAD } from 'store/types'
import { userIsLoadingAction, userRequestSuccessAction } from './actions'

function* loadUser() {
  yield put(userIsLoadingAction())

  const user = {}

  yield put(userRequestSuccessAction(user))
}

const locationSagas = [takeLatest(USER_REQUEST_LOAD, loadUser)]

export default locationSagas
