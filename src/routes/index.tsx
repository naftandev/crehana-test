import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../views/Home'
import Details from '../views/Details'

const Routes = () => (
  <>
    <Route exact path='/' component={Home} />
    <Route exact path='/:countryCode' component={Details} />
  </>
)

export default Routes
