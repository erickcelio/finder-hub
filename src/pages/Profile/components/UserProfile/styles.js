import styled from '@xstyled/styled-components'

export const Container = styled.div`
  padding: 7;
  width: 700px;
  display: flex;
  margin-top: 8;
  border-radius: 1;
  max-height: 145px;
  align-items: center;
  background-color: primary;

  &:hover {
    background-color: primary;
  }
`

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`

export const UserNameAndTagContainer = styled.div`
  flex-direction: column;
  margin-left: 5;
  display: flex;
  flex: 1;
`

export const UserName = styled.span`
  font-size: 3;
  margin-bottom: 2;
`
export const UserTag = styled.span`
  font-size: 2;
`

export const UserStatsContainer = styled.span`
  font-size: 2;
  display: flex;
  font-weight: bold;
  align-items: center;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 4;
  }
`

export const UserStatsName = styled.span`
  margin-bottom: 2;
`

export const UserStatsValue = styled.span``
