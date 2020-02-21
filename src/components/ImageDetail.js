import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import CompressWrapper from './CompressWrapper'

const Detail = ({ id }) => {

  const image = useSelector(state => state.images[id])

  if (!image) return <p>loading...</p>

  const { largeImageURL, user, tags, views, downloads, imageWidth, imageHeight } = image

  return (
    <StyledDetail>
      <h1>{tags}</h1>
      <h2>{user}</h2>
      <div className='wrapper'>
        <div className='image'>
          <img src={largeImageURL} alt={tags} />
        </div>
        <ul>
          <li>views: <strong>{views}</strong></li>
          <li>downloads: <strong>{downloads}</strong></li>
          <li>width: <strong>{imageWidth}</strong> px</li>
          <li>height: <strong>{imageHeight}</strong> px</li>
        </ul>
      </div>
    </StyledDetail>
  )
}

export default Detail

const StyledDetail = styled.div`

  .wrapper {
    display: flex;
    padding-bottom: 1.5rem;
  }

  .image {
    flex: 1;
    margin-right: 1.5rem;
    img {
      width: 100%;
    }
  }

  ul {
    flex-shrink: 0;

    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 1.2rem;
      &:not(first-child) {
        margin-top: 2px;
      }
    }
  }

  @media (max-width: ${p => p.theme.media.medium}) {
    flex-direction: column-reverse;
    .image {
      margin: 1.5rem 0 0 0;
    }
  }
`