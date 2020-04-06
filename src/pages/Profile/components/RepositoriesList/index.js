import React from 'react'

import { Container, Title, RepositoriesContainer } from './styles'
import { useSelector } from 'react-redux'
import { repositoriesDataSelector } from 'store/modules/repositories/selectors'
import Repository from './components/Repository'

const RepositoriesList = () => {
  const repositories = useSelector(repositoriesDataSelector)
  return (
    <Container>
      <Title>Repositórios({repositories.length})</Title>
      <RepositoriesContainer>
        {repositories.map(
          ({
            id,
            name,
            description,
            forks,
            watchers,
            stargazers_count: starts,
            html_url: url,
          }) => (
            <Repository
              key={id}
              forks={forks}
              watchers={watchers}
              starts={starts}
              name={name}
              url={url}
              description={description}
            />
          )
        )}
      </RepositoriesContainer>
    </Container>
  )
}

export default RepositoriesList
