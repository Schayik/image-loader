import React from 'react'
import { Router as HistoryRouter, BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import ImagePage from './ImagePage'

const Router = ({ history }) => {
  const RouterComponent = history ? HistoryRouter : BrowserRouter

  return (
    <RouterComponent history={history}>
      <Navbar />
      <Switch>
        <Route path='/:id'>
          <ImagePage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </RouterComponent>
  )
}

export default Router