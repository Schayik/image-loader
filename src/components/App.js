import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/Globalstyle'
import THEME from '../styles/Theme'
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

  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Router state={state} dispatch={dispatch} />
    </ThemeProvider> 
  )
}

export default App;
