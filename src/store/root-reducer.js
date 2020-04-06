import { combineReducers } from 'redux'

import repositories, {
  initialState as repositoriesInitialState,
} from './modules/repositories/reducer'

export const initialState = {
  repositories: repositoriesInitialState,
}

export default combineReducers({
  repositories,
})
