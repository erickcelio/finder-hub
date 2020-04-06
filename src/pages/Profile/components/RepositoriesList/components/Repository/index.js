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

const Repository = ({ name, description, starts, forks, watchers, url }) => (
  <Container>
    <RepositoryInformations>
      <RepositoryName>{name}</RepositoryName>
      <RepositoryDescription>{description}</RepositoryDescription>
      <RepositoryStatus>
        <Status>
          <StarIcon />
          {starts}
        </Status>
        <Status>
          <EyeIcon />
          {watchers}
        </Status>
        <Status>
          <BranchIcon />
          {forks}
        </Status>
      </RepositoryStatus>
    </RepositoryInformations>
    <RepositoryLink href={url} target="_blank">
      <ArrowRightIcon />
    </RepositoryLink>
  </Container>
)

Repository.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  starts: PropTypes.number,
  forks: PropTypes.number,
  watchers: PropTypes.number,
}

export default Repository
