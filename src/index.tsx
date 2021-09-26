import './styles/index.scss'
import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import { client } from './api/countries'
import { ContextProvider } from './context'
import App from './views/App'

render(
  <ApolloProvider client={client}>
    <StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)
