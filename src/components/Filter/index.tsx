import './styles.scss'
import { Option } from '../../interfaces'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

type FilterProps = {
  options: Option[]
  value: string
  onChange: (value: string) => void
}

const Filter = ({ options, value, onChange }: FilterProps) => (
  <div className='filter'>
    {value.length ? (
      <div className='filter__reset' onClick={() => onChange('')}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    ) : null}
    <select className='filter__list' value={value} onChange={event => onChange(event.target.value)}>
      {options.map((option, index: number) => (
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

export default Filter
