import styled, { css } from '@xstyled/styled-components'
import { down } from '@xstyled/system'

export const Container = styled.div`
  padding: 3 6;
  max-height: 100%;
  width: 700px;
  margin: 6 0;
  border-radius: 1;
  border: 1px solid;
  border-color: primary;
  background-color: background;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  ${down(
    'md',
    css`
      width: 100%;
      margin: 6 0;
      padding: 3;
    `
  )}
`

export const Title = styled.span`
  font-weight: bold;
  margin-bottom: 2;
  font-size: 3;

  ${down(
    'md',
    css`
      font-size: 2;
    `
  )}
`

export const RepositoriesContainer = styled.div`
  width: 100%;
  max-height: -webkit-fill-available;
  overflow: auto;
`
