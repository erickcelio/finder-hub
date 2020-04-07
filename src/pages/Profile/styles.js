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

export const Header = styled.div`
  width: 100%;
  display: flex;
  max-width: 700px;
  position: relative;
  align-items: flex-end;
  justify-content: center;

  ${down(
    'md',
    css`
      align-items: center;

      #logo {
        width: 200px;
      }
    `
  )}

  #arrow-back {
    left: 0;
    cursor: pointer;
    position: absolute;
  }
`
