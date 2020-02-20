import React, { useReducer } from 'react';

import Router from './Router'

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

  return <Router state={state} dispatch={dispatch} />
}

export default App;
