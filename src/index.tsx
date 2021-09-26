import './styles/index.scss'
import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import { client } from './api/countries'
import App from './views/App'

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
