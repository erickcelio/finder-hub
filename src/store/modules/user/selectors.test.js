import reducer, { initialState } from './reducer'
import { USER_IS_LOADING } from 'store/types'
import {
  userDataSelector,
  userErrorSelector,
  userHasErrorSelector,
  userHasLoadedSelector,
  userHasLoadedWithSuccessSelector,
  userIsLoadingSelector,
  userSelector,
} from './selectors'

const exampleState = {
  user: {
    isLoading: false,
    hasLoaded: true,
    error: {},
    data: {
      name: 'John doe',
    },
  },
}

const errorExampleState = {
  user: {
    isLoading: false,
    hasLoaded: true,
    error: {
      message: 'New Error',
    },
    data: {},
  },
}

const loadingExampleState = {
  user: {
    isLoading: true,
    hasLoaded: false,
    error: {},
    data: {},
  },
}

describe('User Selectors', () => {
  it('get user data', () => {
    expect(userDataSelector(exampleState)).toEqual({
      name: 'John doe',
    })
  })

  it('get user error', () => {
    expect(userErrorSelector(exampleState)).toEqual({})
    expect(userErrorSelector(errorExampleState)).toEqual({
      message: 'New Error',
    })
  })

  it('get if user has error', () => {
    expect(userHasErrorSelector(exampleState)).toEqual(false)
    expect(userHasErrorSelector(errorExampleState)).toEqual(true)
  })

  it('get if user has loaded', () => {
    expect(userHasLoadedSelector(exampleState)).toEqual(true)
    expect(userHasLoadedSelector(loadingExampleState)).toEqual(false)
  })

  it('get if user has loaded', () => {
    expect(userHasLoadedSelector(exampleState)).toEqual(true)
    expect(userHasLoadedSelector(loadingExampleState)).toEqual(false)
  })

  it('get if user has loaded with success', () => {
    expect(userHasLoadedWithSuccessSelector(exampleState)).toEqual(true)
    expect(userHasLoadedWithSuccessSelector(loadingExampleState)).toEqual(false)
  })

  it('get if user has loaded with success', () => {
    expect(userIsLoadingSelector(exampleState)).toEqual(false)
    expect(userIsLoadingSelector(loadingExampleState)).toEqual(true)
  })

  it('get entire user object', () => {
    expect(userSelector(exampleState)).toEqual(exampleState.user)
    expect(userSelector(loadingExampleState)).toEqual(loadingExampleState.user)
  })
})
