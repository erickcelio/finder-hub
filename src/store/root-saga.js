import { all } from 'redux-saga/effects'

import repositories from './modules/repositories/sagas'
import user from './modules/user/sagas'

export default function* rootSaga() {
  yield all([...repositories, ...user])
}
