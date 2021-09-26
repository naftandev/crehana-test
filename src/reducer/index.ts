import { State, Action } from '../interfaces'
import types from '../actions/types'

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case types.NAME:
      return {
        ...state,
        filterValues: {
          ...state.filterValues,
          name: action.payload
        }
      }
    case types.CONTINENT:
      return {
        ...state,
        filterValues: {
          ...state.filterValues,
          continent: action.payload
        }
      }
    case types.CURRENCY:
      return {
        ...state,
        filterValues: {
          ...state.filterValues,
          currency: action.payload
        }
      }
    default:
      return state
  }
}

export default reducer
