import { takeLatest, put } from 'redux-saga/effects'
import { USER_REQUEST_LOAD } from 'store/types'
import {
  userIsLoadingAction,
  userRequestSuccessAction,
  userRequestErrorAction,
} from './actions'
import { getUserByUsernameService } from 'services/user'

function* loadUser({ username }) {
  yield put(userIsLoadingAction())
  try {
    const user = yield getUserByUsernameService(username)
    yield put(userRequestSuccessAction(user))
  } catch (e) {
    yield put(userRequestErrorAction(e))
  }
}

const locationSagas = [takeLatest(USER_REQUEST_LOAD, loadUser)]

export default locationSagas
