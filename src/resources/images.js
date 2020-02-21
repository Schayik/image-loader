import axios from 'axios'

import { store } from '../components/App'

const baseURL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}`

export const addImageAction = async imageId => {

  if (store.getState().images[imageId]) return
  
  const response = await axios.get(`${baseURL}&id=${imageId}`)
  const image = response.data.hits[0]

  store.dispatch({
    type: 'addImage',
    image,
  })
}

export const addPageAction = async pageNumber => {

  if (store.getState().pages[pageNumber]) return
  
  const response = await axios.get(`${baseURL}&page=${pageNumber}`)

  let images = {}
  let pageIds = []
  response.data.hits.forEach(hit => {
    images[hit.id] = hit
    pageIds.push(hit.id)
  })

  store.dispatch({
    type: 'addPage',
    images,
    pageNumber,
    pageIds,
  })
}

const initialState = {
  pages: {},
  images: {}
}
  
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'addImage':
      return {
        ...state,
        images: {
          ...state.images,
          [action.image.id]: action.image,
        }
      }
    case 'addPage':
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.pageNumber]: action.pageIds,
        },
        images: {
          ...state.images,
          ...action.images,
        }
      }
    default:
      return state
  }
}

export default reducer