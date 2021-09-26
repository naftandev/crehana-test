import types from './types'

const filterBySearch = (payload: string) => ({
  type: types.NAME,
  payload
})

const filterByContinent = (payload: string) => ({
  type: types.CONTINENT,
  payload
})

const filterByCurrency = (payload: string) => ({
  type: types.CURRENCY,
  payload
})

export { filterBySearch, filterByContinent, filterByCurrency }
