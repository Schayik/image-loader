import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import Image from './Image'
import { addPageAction } from '../resources/images'

const Home = () => {

  const [page, setPage] = useState(1)
  const images = useSelector(state => state[page])

  const handleClick = newPage => {
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
	
	if (!images) return <p>loading...</p>

  return (
    <div>
      <button onClick={() => handleClick(page - 1)}>Prev</button>
      <button onClick={() => handleClick(page + 1)}>Next</button>
      {images.map(hit => (
				<Image key={hit.id} {...hit} />
			))}
    </div>
  );
}

export default Home;
