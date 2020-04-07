import {
  repositoriesDataSelector,
  repositoriesErrorSelector,
  repositoriesHasErrorSelector,
  repositoriesHasLoadedSelector,
  repositoriesHasLoadedWithSuccessSelector,
  repositoriesIsLoadingSelector,
  repositoriesSelector,
} from './selectors'

const exampleState = {
  repositories: {
    isLoading: false,
    hasLoaded: true,
    error: {},
    data: [{ name: 'React' }],
  },
}

const errorExampleState = {
  repositories: {
    isLoading: false,
    hasLoaded: true,
    error: {
      message: 'New Error',
    },
    data: {},
  },
}

const loadingExampleState = {
  repositories: {
    isLoading: true,
    hasLoaded: false,
    error: {},
    data: {},
  },
}

describe('Repositories Selectors', () => {
  it('get repositories data', () => {
    expect(repositoriesDataSelector(exampleState)).toEqual([{ name: 'React' }])
  })

  it('get repositories error', () => {
    expect(repositoriesErrorSelector(exampleState)).toEqual({})
    expect(repositoriesErrorSelector(errorExampleState)).toEqual({
      message: 'New Error',
    })
  })

  it('get if has error on repositories', () => {
    expect(repositoriesHasErrorSelector(exampleState)).toEqual(false)
    expect(repositoriesHasErrorSelector(errorExampleState)).toEqual(true)
  })

  it('get if has loaded repositories', () => {
    expect(repositoriesHasLoadedSelector(exampleState)).toEqual(true)
    expect(repositoriesHasLoadedSelector(loadingExampleState)).toEqual(false)
  })

  it('get if has loaded repositories with success', () => {
    expect(repositoriesHasLoadedWithSuccessSelector(exampleState)).toEqual(true)
    expect(
      repositoriesHasLoadedWithSuccessSelector(loadingExampleState)
    ).toEqual(false)
  })

  it('get if is loading repositories', () => {
    expect(repositoriesIsLoadingSelector(exampleState)).toEqual(false)
    expect(repositoriesIsLoadingSelector(loadingExampleState)).toEqual(true)
  })

  it('get entire repositories object', () => {
    expect(repositoriesSelector(exampleState)).toEqual(
      exampleState.repositories
    )
    expect(repositoriesSelector(loadingExampleState)).toEqual(
      loadingExampleState.repositories
    )
  })
})
