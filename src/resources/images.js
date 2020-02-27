import axios from 'axios'

import { store } from '../components/App'

const ADD_IMAGE = 'ADD_IMAGE'
const ADD_PAGE = 'ADD_PAGE'
const CHANGE_PAGE = 'CHANGE_PAGE'

const baseURL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}`

export const addImageAction = async imageId => {

  if (store.getState().images[imageId]) return
  
  const response = await axios.get(`${baseURL}&id=${imageId}`)
  const image = response.data.hits[0]

  store.dispatch({
    type: ADD_IMAGE,
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
    type: ADD_PAGE,
    images,
    pageNumber,
    pageIds,
  })
}

export const changePageAction = pageNumber => {
  store.dispatch({
    type: CHANGE_PAGE,
    pageNumber,
  })
}

const initialState = {
  pageNumber: 1,
  pages: {},
  images: {}
}
  
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        pageNumber: action.pageNumber,
      }
    case ADD_IMAGE:
      return {
        ...state,
        images: {
          ...state.images,
          [action.image.id]: action.image,
        }
      }
    case ADD_PAGE:
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