import reducer, { initialState } from './reducer'
import {
  userIsLoadingAction,
  userRequestErrorAction,
  userRequestSuccessAction,
  userResetAction,
} from './actions'

describe('User Actions', () => {
  it('action dispatch to change loading state', () => {
    expect(reducer(initialState, userIsLoadingAction())).toEqual({
      ...initialState,
      isLoading: true,
    })
  })

  it('action dispatch to reset state', () => {
    expect(
      reducer(
        {
          isLoading: true,
          error: 'New Error',
          data: { name: 'Julian' },
          hasLoaded: true,
        },
        userResetAction()
      )
    ).toEqual(initialState)
  })

  it('reducer capture dispatch with error state', () => {
    expect(reducer(initialState, userRequestErrorAction('New Error'))).toEqual({
      ...initialState,
      error: 'New Error',
      hasLoaded: true,
    })
  })

  it('reducer capture dispatch with success state', () => {
    expect(
      reducer(initialState, userRequestSuccessAction({ name: 'John' }))
    ).toEqual({ ...initialState, data: { name: 'John' }, hasLoaded: true })
  })
})
