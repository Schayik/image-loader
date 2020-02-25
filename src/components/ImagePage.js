import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'

import CompressWrapper from './CompressWrapper'
import ImageDetail from './ImageDetail'
import { addImageAction } from '../resources/images'

const ImagePage = () => {

  const { id, page } = useParams()

  useEffect(() => {
    addImageAction(id)
  }, [id])

  return (
    <StyledImagePage>
      <CompressWrapper>
        <Link to={`/${page}`}>
          <svg data-testid='back' viewBox="0 0 477.175 477.175">
            <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
          </svg>
        </Link>
      </CompressWrapper>
      <div className='detail'>
        <CompressWrapper>
          <ImageDetail id={id} />
        </CompressWrapper>
      </div>
    </StyledImagePage>
  )
}

export default ImagePage

const StyledImagePage = styled.div`

  svg {
    margin: 1rem 0;
    width: 2rem;

    &:hover {
      cursor: pointer;
    }
  }

  .detail {
    background-color: ${p => p.theme.colors.background};
    border-top: 1px solid ${p => p.theme.colors.border};
    border-bottom: 1px solid ${p => p.theme.colors.border};
    padding: 1rem 0;
  }
`