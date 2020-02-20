import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import Home from './Home'
import Detail from './Detail'

const Router = props => (
    <BrowserRouter>
        {/* <QueryParamProvider ReactRouterRoute={Route}> */}
            <Switch>
                <Route path='/'>
                    <Home {...props} />
                </Route>
                <Route path='/:id'>
                    <Detail {...props} />
                </Route>
            </Switch>
        {/* </QueryParamProvider> */}
    </BrowserRouter>
)

export default Router