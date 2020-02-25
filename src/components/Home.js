import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import CompressWrapper from './CompressWrapper'
import ImageList from './ImageList'
import PageNavigator from './PageNavigator'
import { addPageAction } from '../resources/images'

const Home = () => {

  const { page } = useParams()

  useEffect(() => {
    addPageAction(page)
  }, [page])

  return (
    <StyledHome>
      <CompressWrapper>
        <PageNavigator page={page} />
      </CompressWrapper>
      <div className='home'>
        <CompressWrapper>
          <ImageList page={page} />
        </CompressWrapper>
      </div>
      <CompressWrapper>
        <PageNavigator page={page} />
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
