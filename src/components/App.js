import React from 'react';
import { createStore } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import images from '../resources/images'
import GlobalStyle from '../styles/Globalstyle'
import THEME from '../styles/Theme'
import Router from './Router'

export const store = createStore(images)

const App = ({ history }) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Router history={history} />
    </ThemeProvider> 
  </ReduxProvider>
)

export default App;
