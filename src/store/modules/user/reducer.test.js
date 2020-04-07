import reducer, { initialState } from './reducer'
import {
  USER_IS_LOADING,
  USER_RESET,
  USER_REQUEST_ERROR,
  USER_REQUEST_SUCCESS,
} from 'store/types'

describe('User Reducer', () => {
  it('reducer capture dispatch to change loading state', () => {
    expect(
      reducer(initialState, {
        type: USER_IS_LOADING,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    })
  })

  it('reducer capture dispatch to reset state', () => {
    expect(
      reducer(
        {
          isLoading: true,
          error: 'New Error',
          data: { name: 'Julian' },
          hasLoaded: true,
        },
        {
          type: USER_RESET,
        }
      )
    ).toEqual(initialState)
  })

  it('reducer capture dispatch with error state', () => {
    expect(
      reducer(initialState, {
        type: USER_REQUEST_ERROR,
        error: 'New Error',
      })
    ).toEqual({ ...initialState, error: 'New Error', hasLoaded: true })
  })

  it('reducer capture dispatch with success state', () => {
    expect(
      reducer(initialState, {
        type: USER_REQUEST_SUCCESS,
        data: { name: 'John' },
      })
    ).toEqual({ ...initialState, data: { name: 'John' }, hasLoaded: true })
  })
})
