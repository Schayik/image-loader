import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Image from './ImagePreview'

const ImageList = () => {

  const imageIds = useSelector(state => state.pages[state.pageNumber])

  if (!imageIds) return <p>loading...</p>

  return (
    <StyledList data-testid='image-list'>
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