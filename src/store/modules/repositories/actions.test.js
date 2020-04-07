import reducer, { initialState } from './reducer'
import {
  repositoriesIsLoadingAction,
  repositoriesRequestErrorAction,
  repositoriesRequestSuccessAction,
} from './actions'

describe('Repositories Actions', () => {
  it('action dispatch to change loading state', () => {
    expect(reducer(initialState, repositoriesIsLoadingAction())).toEqual({
      ...initialState,
      isLoading: true,
    })
  })

  it('reducer capture dispatch with error state', () => {
    expect(
      reducer(initialState, repositoriesRequestErrorAction('New Error'))
    ).toEqual({
      ...initialState,
      error: 'New Error',
      hasLoaded: true,
    })
  })

  it('reducer capture dispatch with success state', () => {
    expect(
      reducer(
        initialState,
        repositoriesRequestSuccessAction([{ name: 'React' }])
      )
    ).toEqual({ ...initialState, data: [{ name: 'React' }], hasLoaded: true })
  })
})
