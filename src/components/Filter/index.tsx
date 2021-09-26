import './styles.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Filter = ({ options, value, onChange }) => {

  return (
    <div className='filter'>
      {value.length ? (
        <div className='filter__reset' onClick={() => onChange('')}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      ) : null}
      <select className='filter__list' value={value} onChange={event => onChange(event.target.value)}>
        {options.map((option, index) => (
          <option
            key={index}
            hidden={option.value.length ? false : true}
            value={option.value}
            >
              {option.name}
            </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
