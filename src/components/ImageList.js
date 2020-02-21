import React from 'react'
import { useSelector } from 'react-redux'

const ImageList = ({ page }) => {
  const images = useSelector(state => state[page])

  if (!images) return <p>loading...</p>

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