import React from 'react'
import styled from 'styled-components'

import CompressWrapper from './CompressWrapper'

const PageNavigator = ({ page, handlePageClick }) => (
  <CompressWrapper>
    <StyledNavigator>
      <button onClick={() => handlePageClick(page - 1)}>Prev</button>
      <p>{page}</p>
      <button onClick={() => handlePageClick(page + 1)}>Next</button>
    </StyledNavigator>
  </CompressWrapper>
)

export default PageNavigator

const StyledNavigator = styled.div`
  display: flex;
  justify-content: center;
`