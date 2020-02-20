import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios'

const reducer = (state, action) => {
  switch(action.type) {
    case 'addPage':
      return {
        ...state,
        [action.page]: action.hits,
      }
    default:
      return state
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, {})
  const [page, setPage] = useState(1)

  const handleClick = newPage => {
    if (newPage < 1) {
      setPage(1)
    } else if (newPage > 25) {
      setPage(25)
    } else {
      setPage(newPage)
    }
  }
  // const [buttonClicked, setButtonClicked] = useState(false)



  useEffect(() => {
    const fetchImages = async () => {
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&page=${page}`
  
      const response = await axios.get(url)
  
      dispatch({
        type: 'addPage',
        hits: response.data.hits,
        page,
      })
    }

    if (!state[page]) {
      fetchImages()
    }
  }, [page])

  console.log(state)

  // if (!data) return <div>loading...</div>

  return (
    <div>
      <button onClick={() => handleClick(page - 1)}>Prev</button>
      <button onClick={() => handleClick(page + 1)}>Next</button>
      {state[page] && <p data-testid='json'>{JSON.stringify(state[page])}</p>}
    </div>
  );
}

export default App;
