import './styles.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ value, onChange }) => (
  <div className='search-bar'>
    <FontAwesomeIcon icon={faSearch} />
    <input type="text" placeholder='Search a country...' value={value} onChange={event => onChange(event.target.value)} />
    {value.length ? <FontAwesomeIcon className='search-bar__clear' icon={faTimes} onClick={() => onChange('')} /> : null}
  </div>
)

export default SearchBar
