import React, { useState, useEffect } from 'react';
import axios from 'axios'
// import { useQueryParam, NumberParam, StringParam } from 'use-query-params';

import Image from './Image'

const App = ({ state, dispatch }) => {

	const [page, setPage] = useState(1)
	
	console.log(page)

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
    const fetchImages = async () => {

      const fetchPage = page || 1

      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&page=${fetchPage}`
  
      const response = await axios.get(url)
  
      dispatch({
        type: 'addPage',
        hits: response.data.hits,
        page: fetchPage,
      })
    }

    if (!state[page]) {
      fetchImages()
    }
	}, [page])
	
	if (!state[page]) return <p>loading...</p>

	console.log(state)

  return (
    <div>
      <button onClick={() => handleClick(page - 1)}>Prev</button>
      <button onClick={() => handleClick(page + 1)}>Next</button>
      {state[page].map(hit => (
				<Image key={hit.id} {...hit} />
			))}
    </div>
  );
}

export default App;
