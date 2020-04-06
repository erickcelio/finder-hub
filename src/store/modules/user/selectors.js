import { createSelector } from 'reselect'
import { isEmpty } from 'lodash'

export const userSelector = (state) => state.user

export const userIsLoadingSelector = createSelector(
  userSelector,
  (user) => user.isLoading
)

export const userHasLoadedSelector = createSelector(
  userSelector,
  (user) => user.hasLoaded
)

export const userErrorSelector = createSelector(
  userSelector,
  (user) => user.error
)

export const userHasErrorSelector = createSelector(
  userErrorSelector,
  (error) => !isEmpty(error)
)

export const userHasLoadedWithSuccessSelector = createSelector(
  userHasLoadedSelector,
  userHasErrorSelector,
  (hasLoaded, hasError) => hasLoaded && !hasError
)
