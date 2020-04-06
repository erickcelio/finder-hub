import { createSelector } from 'reselect'
import { isEmpty } from 'lodash'

export const repositoriesSelector = (state) => state.repositories

export const repositoriesIsLoadingSelector = createSelector(
  repositoriesSelector,
  (repositories) => repositories.isLoading
)

export const repositoriesHasLoadedSelector = createSelector(
  repositoriesSelector,
  (repositories) => repositories.hasLoaded
)

export const repositoriesErrorSelector = createSelector(
  repositoriesSelector,
  (repositories) => repositories.error
)

export const repositoriesHasErrorSelector = createSelector(
  repositoriesErrorSelector,
  (error) => !isEmpty(error)
)

export const repositoriesHasLoadedWithSuccessSelector = createSelector(
  repositoriesHasLoadedSelector,
  repositoriesHasErrorSelector,
  (hasLoaded, hasError) => hasLoaded && !hasError
)
