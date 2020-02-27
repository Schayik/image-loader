import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import CompressWrapper from './CompressWrapper'
import ImageList from './ImageList'
import PageNavigator from './PageNavigator'
import { addPageAction } from '../resources/images'

const Home = () => {

  const pageNumber = useSelector(state => state.pageNumber)

  useEffect(() => {
    addPageAction(pageNumber)
  }, [pageNumber])

  return (
    <StyledHome>
      <CompressWrapper>
        <PageNavigator />
      </CompressWrapper>
      <div className='home'>
        <CompressWrapper>
          <ImageList />
        </CompressWrapper>
      </div>
      <CompressWrapper>
        <PageNavigator />
      </CompressWrapper>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.main`
  .home {
    background-color: ${p => p.theme.colors.background};
    border-top: 1px solid ${p => p.theme.colors.border};
    border-bottom: 1px solid ${p => p.theme.colors.border};
    padding: 2rem 0;
  }
`
