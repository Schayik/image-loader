import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Image from './Image'

const ImageList = ({ page }) => {
  const imageIds = useSelector(state => state.pages[page])
  console.log(imageIds)

  if (!imageIds) return <p>loading...</p>

  return (
    <StyledList>
      {imageIds.map(id => (
        <Image key={id} id={id} />
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