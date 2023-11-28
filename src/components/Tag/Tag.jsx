import { useEffect, useState } from 'react'
import './style/tag.css'
import cardsStorageManagment from '../../services/repositoryPattern'

export default function Tag ({ id, taskInfo, name, isSelected }) {
  const [isActive, setIsActive] = useState()
  useEffect(() => {
    setIsActive(isSelected)
  }, [isSelected])

  const handleClick = () => {
    if (taskInfo) {
      cardsStorageManagment.addSelectedTag({ note: taskInfo, tag: { id, name } })
    }
    setIsActive(!isActive)
  }

  return (
    <li className={`card-tag ${isActive ? 'selected-tag' : ''}`} onClick={handleClick}><p>{name}</p></li>
  )
}
