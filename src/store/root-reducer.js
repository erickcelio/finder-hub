import { combineReducers } from 'redux'

import repositories, {
  initialState as repositoriesInitialState,
} from './modules/repositories/reducer'

import user, { initialState as userInitialState } from './modules/user/reducer'

export const initialState = {
  repositories: repositoriesInitialState,
  user: userInitialState,
}

export default combineReducers({
  repositories,
  user,
})
