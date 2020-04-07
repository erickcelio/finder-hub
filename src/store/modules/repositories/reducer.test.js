import reducer, { initialState } from './reducer'
import {
  REPOSITORIES_IS_LOADING,
  REPOSITORIES_REQUEST_ERROR,
  REPOSITORIES_REQUEST_SUCCESS,
} from 'store/types'

describe('Repositories Reducer', () => {
  it('reducer capture dispatch to change loading state', () => {
    expect(
      reducer(initialState, {
        type: REPOSITORIES_IS_LOADING,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    })
  })

  it('reducer capture dispatch with error state', () => {
    expect(
      reducer(initialState, {
        type: REPOSITORIES_REQUEST_ERROR,
        error: 'New Error',
      })
    ).toEqual({ ...initialState, error: 'New Error', hasLoaded: true })
  })

  it('reducer capture dispatch with success state', () => {
    expect(
      reducer(initialState, {
        type: REPOSITORIES_REQUEST_SUCCESS,
        data: [{ name: 'React' }],
      })
    ).toEqual({ ...initialState, data: [{ name: 'React' }], hasLoaded: true })
  })
})
