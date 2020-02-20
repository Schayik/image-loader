import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {
  

  const [data, setData] = useState('')
  // const [buttonClicked, setButtonClicked] = useState(false)

  useEffect(() => {
    const url = 'https://pixabay.com/api/?key=' + process.env.REACT_APP_PIXABAY_KEY

    const fetchImages = async () => {
      const response = await axios.get(url)
      console.log(response.data)
      setData(response.data)
    }

    fetchImages()
  }, [])

  // const fetchImages = async () => {
  //   const response  = await axios.get(url)
  //   const data = await response
  //   setData(data)
  //   // setButtonClicked(true)
  // }

  // if (!data) return <div>loading...</div>

  return (
    <div>
      {/* <button onClick={fetchImages}>Load Images</button> */}
      {data && <p data-testid='json'>{JSON.stringify(data)}</p>}
    </div>
  );
}

export default App;
