import produce from 'immer'
import {
  REPOSITORIES_REQUEST_SUCCESS,
  REPOSITORIES_IS_LOADING,
  REPOSITORIES_REQUEST_ERROR,
} from 'store/types'

export const initialState = {
  isLoading: false,
  hasLoaded: false,
  error: {},
  data: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REPOSITORIES_REQUEST_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false
        draft.hasLoaded = true
        draft.data = action.data
      })

    case REPOSITORIES_IS_LOADING:
      return produce(state, (draft) => {
        draft.isLoading = true
        draft.hasLoaded = false
      })

    case REPOSITORIES_REQUEST_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false
        draft.hasLoaded = true
        draft.data = {}
        draft.error = action.error
      })

    default:
      return state
  }
}
