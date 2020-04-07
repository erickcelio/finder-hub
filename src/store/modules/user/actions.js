import {
  USER_REQUEST_SUCCESS,
  USER_IS_LOADING,
  USER_REQUEST_ERROR,
  USER_REQUEST_LOAD,
  USER_RESET,
} from 'store/types'

export const userRequestLoadAction = ({ username }) => ({
  type: USER_REQUEST_LOAD,
  username,
})

export const userRequestSuccessAction = (data) => ({
  data,
  type: USER_REQUEST_SUCCESS,
})

export const userIsLoadingAction = () => ({
  type: USER_IS_LOADING,
})

export const userRequestErrorAction = (error) => ({
  error,
  type: USER_REQUEST_ERROR,
})

export const userResetAction = () => ({
  type: USER_RESET,
})
