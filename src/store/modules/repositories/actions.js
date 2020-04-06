import {
  REPOSITORIES_REQUEST_SUCCESS,
  REPOSITORIES_IS_LOADING,
  REPOSITORIES_REQUEST_ERROR,
  REPOSITORIES_REQUEST_LOAD,
} from 'store/types'

export const repositoriesRequestLoadAction = ({ username }) => ({
  type: REPOSITORIES_REQUEST_LOAD,
  username,
})

export const repositoriesRequestSuccessAction = (data) => ({
  data,
  type: REPOSITORIES_REQUEST_SUCCESS,
})

export const repositoriesIsLoadingAction = () => ({
  type: REPOSITORIES_IS_LOADING,
})

export const repositoriesRequestErrorAction = (error) => ({
  error,
  type: REPOSITORIES_REQUEST_ERROR,
})
