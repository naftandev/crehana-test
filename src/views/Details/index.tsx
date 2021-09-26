import './styles.scss'
import { Country, CountryData, Languages, Params } from '../../interfaces'
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { COUNTRY_QUERY } from '../../api/countries'
import Spinner from '../../components/Spinner'

const Details = () => {
  const { countryCode }: Params = useParams()
  const { goBack } = useHistory()
  const [getCountry, { loading, error, data }] = useLazyQuery<CountryData>(COUNTRY_QUERY, {
    variables: { countryCode }
  })
  const [country, setCountry] = useState<Country>({} as Country)

  useEffect(() => {
    if (countryCode) getCountry()
  }, [countryCode])

  useEffect(() => {
    if (data) setCountry(data.country)
  }, [data])

  if (loading) return <Spinner />
  if (error) return <p className='error-message'>Information not available</p>

  if (Object.keys(country).length) {
    const languagesList = Array.from(country.languages, (language: Languages) => `${language.name} (${language.code})`).join(', ')

    return (
      <div className='details'>
        <div className='container'>
          <FontAwesomeIcon className='back' icon={faArrowLeft} onClick={goBack}/>
          <div className='details__card'>
            <div className='details__card-header'>
              <p className='details__card-title'>
                <span>{country.emoji}</span>
                Details for {country.name}
              </p>
            </div>
            <div className='details__card-body'>
              <ul>
                <li>
                  <strong>Code</strong>
                  <p>{country.code}</p>
                </li>
                <li>
                  <strong>Name</strong>
                  <p>{country.name}</p>
                </li>
                <li>
                  <strong>Currency</strong>
                  <p>{country.currency}</p>
                </li>
                <li>
                  <strong>Continent</strong>
                  <p>{country.continent.name} ({country.continent.code})</p>
                </li>
                <li>
                  <strong>Languages</strong>
                  <p>{languagesList}</p>
                </li>
                <li>
                  <strong>Capital</strong>
                  <p>{country.capital}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default Details
