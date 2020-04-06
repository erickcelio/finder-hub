import { all } from 'redux-saga/effects'

import repositories from './modules/repositories/sagas'

export default function* rootSaga() {
  yield all([...repositories])
}
