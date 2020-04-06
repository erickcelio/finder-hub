import styled from '@xstyled/styled-components'
import { Container as InputContainer } from 'components/Input/styles'

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
  border-color: malachite;
  background-color: rgba(22, 27, 51, 0.8);

  ${InputContainer} {
    margin-top: 7;
  }
`
