import React from 'react'
import { useSelector } from 'react-redux'

const ImageList = () => {
  const images = useSelector(state => state[page])

  return (
    <div>
      <ul>
        {images.map(image => (
          <li key={image.id}>{image.id}</li>
        ))}
      </ul>
    </div>
  )
}

export default ImageList