import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import CompressWrapper from './CompressWrapper'
import ImageList from './ImageList'
import PageNavigator from './PageNavigator'
import { addPageAction } from '../resources/images'

const Home = () => {

  const [page, setPage] = useState(1)

  const handlePageClick = newPage => {
    if (newPage < 1) {
      setPage(1)
    } else if (newPage > 25) {
      setPage(25)
    } else {
      setPage(newPage)
    }
  }
  
  useEffect(() => {
    addPageAction(page)
  }, [page])

  return (
    <main>
      <CompressWrapper>
        <PageNavigator page={page} handlePageClick={handlePageClick} />
      </CompressWrapper>
      <StyledHome>
        <CompressWrapper>
          <ImageList page={page} />
        </CompressWrapper>
      </StyledHome>
    </main>
  );
}

export default Home;

const StyledHome = styled.main`
  background-color: ${p => p.theme.colors.background};
  border-top: 1px solid ${p => p.theme.colors.border};
  padding: 1rem 0;
`
