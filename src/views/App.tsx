import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Routes from '../routes'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Routes />
    </Switch>
  </BrowserRouter>
)

export default App
