import React from 'react'
import { ReactComponent as ArrowRightIcon } from 'assets/images/icons/arrow-right.svg'
import { ReactComponent as BranchIcon } from 'assets/images/icons/branch.svg'
import { ReactComponent as EyeIcon } from 'assets/images/icons/eye.svg'
import { ReactComponent as StarIcon } from 'assets/images/icons/star.svg'
import {
  Container,
  RepositoryName,
  RepositoryDescription,
  RepositoryInformations,
  RepositoryLink,
  RepositoryStatus,
  Status,
} from './styles'
import PropTypes from 'prop-types'

const Repository = ({ name, description, stars, forks, watchers, url }) => (
  <Container id="repository">
    <RepositoryInformations>
      <RepositoryName id="repository-name">{name}</RepositoryName>
      <RepositoryDescription id="repository-description">
        {description}
      </RepositoryDescription>
      <RepositoryStatus>
        <Status id="repository-stars">
          <StarIcon />
          {stars}
        </Status>
        <Status id="repository-watchers">
          <EyeIcon />
          {watchers}
        </Status>
        <Status id="repository-forks">
          <BranchIcon />
          {forks}
        </Status>
      </RepositoryStatus>
    </RepositoryInformations>
    <RepositoryLink id="repository-link" href={url} target="_blank">
      <ArrowRightIcon />
    </RepositoryLink>
  </Container>
)

Repository.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  forks: PropTypes.number,
  watchers: PropTypes.number,
}

export default Repository
