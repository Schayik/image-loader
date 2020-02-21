import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CompressWrapper from './CompressWrapper'
import { addImageAction } from '../resources/images'

const Detail = () => {

  const { id } = useParams()

  useEffect(() => {
    addImageAction(id)
  }, [id])

  const image = useSelector(state => state.images[id])

  if (!image) return <CompressWrapper><p>loading...</p></CompressWrapper>

  console.log(image)

  const { largeImageURL, user, tags, views, downloads, imageWidth, imageHeight } = image

  return (
    <CompressWrapper>
      <h1>{tags}</h1>
      <h2>{user}</h2>
      <StyledDetail>
        <div className='image'>
          <img src={largeImageURL} alt={tags} />
        </div>
        <ul>
          <li>views: <strong>{views}</strong></li>
          <li>downloads: <strong>{downloads}</strong></li>
          <li>width: <strong>{imageWidth}</strong> px</li>
          <li>height: <strong>{imageHeight}</strong> px</li>
        </ul>
      </StyledDetail>
    </CompressWrapper>
  )
}

export default Detail

const StyledDetail = styled.div`
  display: flex;
  padding-bottom: 1.5rem;

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
`