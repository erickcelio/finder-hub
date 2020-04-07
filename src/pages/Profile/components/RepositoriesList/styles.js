import styled, { css } from '@xstyled/styled-components'
import { down } from '@xstyled/system'

export const Container = styled.div`
  flex: 1;
  margin: 6 0;
  padding: 3 6;
  width: 700px;
  display: flex;
  max-height: 100%;
  border-radius: 1;
  border: 1px solid;
  align-items: center;
  border-color: primary;
  flex-direction: column;
  background-color: background;

  ${down(
    'md',
    css`
      padding: 3;
      width: 100%;
      margin: 6 0;
    `
  )}
`

export const Title = styled.span`
  font-size: 3;
  margin-bottom: 2;
  font-weight: bold;

  ${down(
    'md',
    css`
      font-size: 2;
    `
  )}
`

export const RepositoriesContainer = styled.div`
  width: 100%;
  flex: 1 1 0;
  overflow: auto;
`
