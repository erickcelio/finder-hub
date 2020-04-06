import React from 'react'
import { DotsContainer, Dot } from './styles'
import PropTypes from 'prop-types'

const Loading = ({ children, loading }) =>
  loading ? (
    <DotsContainer>
      <Dot />
      <Dot />
      <Dot />
    </DotsContainer>
  ) : (
    children
  )

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
}

Loading.defaultProps = {
  loading: false,
}

export default Loading
