import { useEffect, useState } from 'react'
import './style/tag.css'
import { useCardContext } from '../../context/cardsContext'

export default function Tag ({ id, taskInfo, name, isSelected }) {
  const { updateSelectedTag } = useCardContext()

  const [isActive, setIsActive] = useState()
  useEffect(() => {
    setIsActive(isSelected)
  }, [isSelected])

  const handleClick = () => {
    if (taskInfo) {
      updateSelectedTag({ note: taskInfo, tag: { id, name }, isActive })
    }
    setIsActive(!isActive)
  }

  return (
    <li className={`card-tag ${isActive ? 'selected-tag' : ''}`} onClick={handleClick}><p>{name}</p></li>
  )
}
