import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import ImagePage from './ImagePage'

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/:id'>
        <ImagePage />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router