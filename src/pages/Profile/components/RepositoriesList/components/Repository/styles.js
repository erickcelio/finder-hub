import styled, { css } from '@xstyled/styled-components'
import { down } from '@xstyled/system'

export const RepositoryLink = styled.a`
  padding: 0 4;
  height: 100%;
  outline: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s;
  border-left: 1px solid;
  border-color: primary;
  justify-content: center;
`

export const Container = styled.div`
  height: 80px;
  display: flex;
  margin: 4 3 0 3;
  border-radius: 1;
  border: 1px solid;
  transition: all 0.3s;
  border-color: primary;

  &:hover {
    background-color: primary;

    ${RepositoryLink} {
      border-color: white;
    }
  }

  ${down(
    'md',
    css`
      margin: 4 0 0 0;
    `
  )}
`

export const RepositoryInformations = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RepositoryStatus = styled.div`
  display: flex;
`

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3;

  svg {
    &:first-child {
      margin-right: 1;
    }
  }
`

export const RepositoryName = styled.span`
  font-size: 2;
  max-width: 90%;
  margin-bottom: 1;
  overflow: hidden;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const RepositoryDescription = styled.span`
  font-size: 1;
  margin-bottom: 2;

  ${down(
    'md',
    css`
      display: none;
    `
  )}
`
