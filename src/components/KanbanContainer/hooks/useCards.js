import { useEffect, useState } from 'react'
import cardsStorageManagment from '../../../services/repositoryPattern'

export default function useCardsWithStatus ({ status }) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(cardsStorageManagment.getTaskCardsWithStatus({ status }))
  }, [])

  return {
    cards
  }
}
