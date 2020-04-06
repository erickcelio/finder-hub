import styled from '@xstyled/styled-components'

export const Container = styled.div`
  height: 80px;
  margin: 4 3 0 3;
  display: flex;
  border-radius: 1;
  border: 1px solid;
  border-color: white;
`

export const RepositoryInformations = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RepositoryLink = styled.a`
  transition: all 0.3s;
  outline: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4;
  border-left: 1px solid;
  border-color: white;
  cursor: pointer;

  &:hover {
    background-color: primary;
  }
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
  font-weight: bold;
  margin-bottom: 1;
`

export const RepositoryDescription = styled.span`
  font-size: 1;
  margin-bottom: 2;
`
