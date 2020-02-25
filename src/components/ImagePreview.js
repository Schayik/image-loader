import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Image = ({ id }) => {

  const image = useSelector(state => state.images[id])
  const { tags, webformatURL, webformatWidth, webformatHeight } = image

  const ratio = webformatWidth / webformatHeight

  return (
    <StyledImage ratio={ratio} as={Link} to={`/image/${id}`}>
      <img src={webformatURL} alt={tags} />
    </StyledImage>
  )
}

export default Image

const StyledImage = styled.div`
  flex: 1 0 calc(18% * ${p => p.ratio});
  max-width: 40%;
  max-height: 20rem;

  padding: .5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${p => p.theme.media.large}) {
    max-width: 60%;
  }

  @media (max-width: ${p => p.theme.media.medium}) {
    flex-basis: calc(25% * ${p => p.ratio});
  }

  @media (max-width: ${p => p.theme.media.small}) {
    flex-basis: calc(28% * ${p => p.ratio});
    max-width: 100%;
  }

  @media (max-width: ${p => p.theme.media.min}) {
    flex-basis: calc(100% * ${p => p.ratio});
  }
`