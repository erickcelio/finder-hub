import styled from '@xstyled/styled-components'

export const DotsContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 1;
  border-radius: 50%;
  background-color: white;
  animation: jump 1s infinite;

  &:nth-child(1) {
    animation-delay: 100ms;
  }

  &:nth-child(2) {
    animation-delay: 200ms;
  }

  &:nth-child(3) {
    animation-delay: 300ms;
  }

  @keyframes jump {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }
  }
`
