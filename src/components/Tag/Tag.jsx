import { useState } from 'react'
import './style/tag.css'

export default function Tag ({ id, name, isSelected }) {
  const [isActive, setIsActive] = useState(isSelected)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <li className={`card-tag ${isActive ? 'selected-tag' : ''}`} onClick={handleClick}><p>{name}</p></li>
  )
}
