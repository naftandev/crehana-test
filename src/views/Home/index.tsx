import './styles.scss'
import { Country, CountriesData } from '../../interfaces'
import React, { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client'

import { ALL_COUNTRIES_QUERY } from '../../api/countries'
import { Context } from '../../context'
import { filterBySearch, filterByContinent, filterByCurrency } from '../../actions'

import Spinner from '../../components/Spinner'
import SearchBar from '../../components/SearchBar'
import Filter from '../../components/Filter'
import CountryCard from '../../components/CountryCard'

const Home = () => {
  const { loading, error, data } = useQuery<CountriesData>(ALL_COUNTRIES_QUERY)
  const [countries, setCountries] = useState<Country[]>([])
  const { state, dispatch } = useContext(Context)
  const { filterValues } = state

  useEffect(() => {
    if (data) {
      const filteredData = data.countries.filter(country =>
        country.name.toLowerCase().includes(filterValues.name.toLowerCase())
        && country.continent.code.includes(filterValues.continent)
        && (country.currency && country.currency.includes(filterValues.currency))
      )
      setCountries(filteredData)
    }
  }, [data, filterValues])

  const continentOptions = () => {
    const continents = [
      { value: '', name: 'Filter by continent' }
    ]

    data && data.countries.forEach(country => {
      const isExist = continents.filter(continent => continent.value === country.continent.code)

      if(country.continent.code && country.continent.name && !isExist.length) {
        continents.push(
          {
            value: country.continent.code,
            name: country.continent.name
          }
        )
      }
    })

    return continents
  }

  const currencyOptions = () => {
    const currencies = [
      { value: '', name: 'Filter by currency' }
    ]

    data && data.countries.forEach(country => {
      const currenciesList = country.currency ? country.currency.split(',') : []

      currenciesList.forEach(currency => {
        const isExist = currencies.filter(currentCurrency => currency.includes(currentCurrency.name))

        if (!isExist.length) {
          currencies.push(
            {
              value: currency,
              name: currency
            }
          )
        }
      })
    })

    return currencies
  }

  const onChange = (value: string, type: string) => {
    switch (type) {
      case 'name':
        return dispatch(filterBySearch(value))
      case 'continent':
        return dispatch(filterByContinent(value))
      case 'currency':
        return dispatch(filterByCurrency(value))
      default:
        return
    }
  }

  if (loading) return <Spinner />
  if (error) return <p className='error-message'>Information not available</p>

  return (
    <div className='home'>
      <div className='container'>
        <h1 className='title'>World countries</h1>
        <SearchBar value={filterValues.name} onChange={value => onChange(value, 'name')} />
        <div className='filters'>
          <Filter options={continentOptions()} value={filterValues.continent} onChange={value => onChange(value, 'continent')} />
          <Filter options={currencyOptions()} value={filterValues.currency} onChange={value => onChange(value, 'currency')} />
        </div>
        <div className='countries'>
          {countries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
          {!countries.length && <p className='info-message'>No countries found</p>}
        </div>
      </div>
    </div>
  )
}

export default Home
