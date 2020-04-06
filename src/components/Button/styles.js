import styled from '@xstyled/styled-components'
import { Dot } from 'components/Loading/styles'

export const StyledButton = styled.button`
  font-size: 2;
  color: white;
  width: 160px;
  height: 40px;
  outline: none;
  cursor: pointer;
  border-radius: 1;
  border: 1px solid;
  transition: all 0.3s;
  border-color: malachite;
  background-color: transparent;

  &:hover {
    background-color: malachite;
  }

  ${Dot} {
    width: 10px;
    height: 10px;
  }
`
