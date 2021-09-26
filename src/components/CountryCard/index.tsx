import './styles.scss'
import { Country } from '../../interfaces'
import React from 'react'
import { useHistory } from 'react-router-dom'

type CountryCardProps = {
  country: Country
}

const CountryCard = ({ country }: CountryCardProps) => {
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
