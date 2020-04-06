import styled, { css } from '@xstyled/styled-components'
import { down } from '@xstyled/system'
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  #logo {
    margin-top: 6;

    ${down(
      'md',
      css`
        margin-bottom: 4;
        margin-top: 2;
      `
    )}
  }

  ${down(
    'md',
    css`
      padding: 0 4;
    `
  )}
`
