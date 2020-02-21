import axios from 'axios'

import { store } from '../components/App'

export const addPageAction = async page => {

  if (store.getState()[page]) return
  
  const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&page=${page}`
  const response = await axios.get(url)

  store.dispatch({
    type: 'addPage',
    hits: response.data.hits,
    page,
  })
}
  
const images = (state = {}, action) => {
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

export default images