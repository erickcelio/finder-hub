import React from 'react'

import {
  Container,
  UserAvatar,
  UserNameAndTagContainer,
  UserName,
  UserTag,
  UserStatsContainer,
  UserStatsName,
  UserStatsValue,
} from './styles'
import { useSelector } from 'react-redux'
import { userDataSelector } from 'store/modules/user/selectors'
const UserProfile = () => {
  const user = useSelector(userDataSelector)

  return (
    <Container>
      <UserAvatar src={user.avatar_url} />
      <UserNameAndTagContainer>
        <UserName>{user.name}</UserName>
        <UserTag>@{user.login}</UserTag>
      </UserNameAndTagContainer>
      <UserStatsContainer>
        <UserStatsName>Seguidores</UserStatsName>
        <UserStatsValue>{user.followers}</UserStatsValue>
      </UserStatsContainer>
      <UserStatsContainer>
        <UserStatsName>Seguindo</UserStatsName>
        <UserStatsValue>{user.following}</UserStatsValue>
      </UserStatsContainer>
    </Container>
  )
}

export default UserProfile
