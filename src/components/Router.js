import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import ImagePage from './ImagePage'

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/image/:id'>
        <ImagePage />
      </Route>
      <Route path='/:page'>
        <Home />
      </Route>
      <Redirect to="/1" />
    </Switch>
  </BrowserRouter>
)

export default Router