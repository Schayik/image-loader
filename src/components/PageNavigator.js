import React from 'react'
import styled from 'styled-components'

import CompressWrapper from './CompressWrapper'

const PageNavigator = ({ page, setPage }) => (
  <CompressWrapper>
    <StyledNavigator>
    {page > 1 &&
      <svg onClick={() => setPage(page - 1)} viewBox="0 0 477.175 477.175">
        <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
      </svg>
    }

    <p>{page}</p>

    {page < 25 && 
      <svg onClick={() => setPage(page + 1)} viewBox="0 0 477.175 477.175">
        <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/>
      </svg>
    }
    </StyledNavigator>
  </CompressWrapper>
)

export default PageNavigator

const StyledNavigator = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  svg {
    width: 2rem;
    &:hover {
      cursor: pointer;
    }
  }

  p {
    font-size: 1.5rem;
    margin: 0 .5rem;
  }
`