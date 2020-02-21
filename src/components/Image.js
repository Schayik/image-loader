import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Image = ({ id, tags, webformatURL, webformatWidth, webformatHeight }) => {

  const basis = `calc(100% * .2 * ${webformatWidth / webformatHeight})`

  return (
    <StyledImage basis={basis} as={Link} to={`/${id}`}>
      <img src={webformatURL} alt={tags} />
    </StyledImage>
  )
}

export default Image

const StyledImage = styled.div`
  flex: 1 0 ${p => p.basis};
  max-width: 40%;
  max-height: 20rem;

  padding: .5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`