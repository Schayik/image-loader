import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Image from './Image'

const ImageList = ({ page }) => {
  const images = useSelector(state => state[page])
  console.log(images)

  if (!images) return <p>loading...</p>

  return (
    <StyledList>
      {images.map(image => (
        <Image key={image.id} {...image} />
      ))}
    </StyledList>
  )
}

export default ImageList

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: -.5rem;
`