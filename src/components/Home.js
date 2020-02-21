import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import CompressWrapper from './CompressWrapper'
import ImageList from './ImageList'
import PageNavigator from './PageNavigator'
import { addPageAction } from '../resources/images'

const Home = () => {

  const [page, setPage] = useState(1)
  
  useEffect(() => {
    addPageAction(page)
  }, [page])

  return (
    <main>
      <CompressWrapper>
        <PageNavigator page={page} setPage={setPage} />
      </CompressWrapper>
      <StyledHome>
        <CompressWrapper>
          <ImageList page={page} />
        </CompressWrapper>
      </StyledHome>
      <CompressWrapper>
        <PageNavigator page={page} setPage={setPage} />
      </CompressWrapper>
    </main>
  );
}

export default Home;

const StyledHome = styled.main`
  background-color: ${p => p.theme.colors.background};
  border-top: 1px solid ${p => p.theme.colors.border};
  border-bottom: 1px solid ${p => p.theme.colors.border};
  padding: 2rem 0;
`
