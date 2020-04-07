import React from 'react'

import {
  Container,
  UserAvatar,
  UserNameAndTagContainer,
  UserName,
  UserBio,
  UserEmail,
  UserStatsContainer,
  UserStatsName,
  UserStatsValue,
} from './styles'
import { useSelector } from 'react-redux'
import { userDataSelector } from 'store/modules/user/selectors'
const UserProfile = () => {
  const user = useSelector(userDataSelector)

  return (
    <Container id="user-profile">
      <UserAvatar id="user-avatar" src={user.avatar_url} />
      <UserNameAndTagContainer>
        <UserName id="user-name">{user.name}</UserName>
        <UserBio id="user-bio">{user.email}</UserBio>
        <UserEmail id="user-email">{user.bio}</UserEmail>
      </UserNameAndTagContainer>
      <UserStatsContainer id="user-followers">
        <UserStatsName>Seguidores</UserStatsName>
        <UserStatsValue>{user.followers}</UserStatsValue>
      </UserStatsContainer>
      <UserStatsContainer id="user-following">
        <UserStatsName>Seguindo</UserStatsName>
        <UserStatsValue>{user.following}</UserStatsValue>
      </UserStatsContainer>
    </Container>
  )
}

export default UserProfile
