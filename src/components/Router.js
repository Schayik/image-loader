import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Detail from './Detail'

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/:id'>
        <Detail />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router