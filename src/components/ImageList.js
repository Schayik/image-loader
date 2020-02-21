import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Image from './Image'
import CompressWrapper from './CompressWrapper'

const ImageList = ({ page }) => {
  const images = useSelector(state => state[page])
  console.log(images)

  if (!images) return <p>loading...</p>

  return (
    <StyledList>
      <CompressWrapper>
        <div className='wrapper'>
          {images.map(image => (
            <Image key={image.id} {...image} />
          ))}
        </div>
      </CompressWrapper>
    </StyledList>
  )
}

export default ImageList

const StyledList = styled.div`
  background-color: ${p => p.theme.colors.background};
  border-top: 1px solid ${p => p.theme.colors.border};
  padding: 1rem 0;

  .wrapper {
    display: flex;
    flex-wrap: wrap;

    margin: -.5rem;
  }
`