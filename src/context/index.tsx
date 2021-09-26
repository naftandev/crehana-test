import * as Interfaces from '../interfaces'
import React, { useReducer } from 'react'

import reducer from '../reducer'

const initialState = {
  filterValues: {
    name: '',
    continent: '',
    currency: ''
  }
}

const Context = React.createContext<Interfaces.Context>({} as Interfaces.Context)

const ContextProvider = ({ children }: Interfaces.ContextProvider) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
