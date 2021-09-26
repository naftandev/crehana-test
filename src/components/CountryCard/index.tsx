import './styles.scss'
import React from 'react'
import { useHistory } from 'react-router-dom'

const CountryCard = ({ country }) => {
  const { push } = useHistory()

  const handleCountryInfo = () => push(`/${country.code}`)

  return (
    <div className='country-card' onClick={handleCountryInfo}>
      <div className='country-card__flag'>
        <span>{country.emoji}</span>
      </div>
      <div className='country-card__name'>{country.name}</div>
    </div>
  )
}

export default CountryCard
