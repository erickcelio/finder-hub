import produce from 'immer'
import {
  USER_REQUEST_SUCCESS,
  USER_IS_LOADING,
  USER_REQUEST_ERROR,
} from 'store/types'

export const initialState = {
  isLoading: false,
  hasLoaded: false,
  error: {},
  data: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false
        draft.hasLoaded = true
        draft.data = action.data
      })

    case USER_IS_LOADING:
      return produce(state, (draft) => {
        draft.isLoading = true
        draft.hasLoaded = false
        draft.error = {}
      })

    case USER_REQUEST_ERROR:
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
