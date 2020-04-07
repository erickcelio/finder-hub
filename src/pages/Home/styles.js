import styled, { css } from '@xstyled/styled-components'
import { Container as InputContainer } from 'components/Input/styles'
import { down } from '@xstyled/system'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.div`
  padding: 9 8;
  display: flex;
  border-radius: 1;
  border: 1px solid;
  align-items: center;
  flex-direction: column;
  border-color: primary;
  background-color: rgba(22, 27, 51, 0.8);

  ${InputContainer} {
    margin-top: 7;
  }

  ${down(
    'md',
    css`
      padding: 9 0 0 0;
      align-self: baseline;
      background-color: transparent;
      border: none;
    `
  )}
`
