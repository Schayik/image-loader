import React, { useState, useEffect } from 'react';

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
      <PageNavigator page={page} handlePageClick={handlePageClick} />
      <ImageList page={page} />
    </main>
  );
}

export default Home;
