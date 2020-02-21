import React from 'react'
import styled from 'styled-components'

import Compress from './Compress'

const PageNavigator = ({ page, handlePageClick }) => (
  <Compress>
    <StyledNavigator>
      <button onClick={() => handlePageClick(page - 1)}>Next</button>
      <button onClick={() => handlePageClick(page + 1)}>Next</button>
    </StyledNavigator>
  </Compress>
)

export default PageNavigator

const StyledNavigator = styled.div`
  display: flex;
  justify-content: center;
`