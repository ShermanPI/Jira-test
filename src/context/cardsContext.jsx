import { createContext, useContext, useState } from 'react'
import cardsStorageManagment from '../services/repositoryPattern'

const cardsContext = createContext()

const CardsContextProvider = ({ children }) => {
  const [cards, setCards] = useState(cardsStorageManagment.getAllTaskCards())

  const filterItemsWithStatus = ({ status }) => {
    const cardsWithStatus = cards.filter(el => el.status === status)
    return cardsWithStatus
  }

  const addItem = ({ title, description, tags = [], asignee, dueDate }) => {
    const newItem = cardsStorageManagment.createTaskCard({ title, description, tags, asignee, dueDate })
    const newItems = [...cards]
    newItems.push(newItem)
    setCards(newItems)
  }

  return (
    <cardsContext.Provider value={{ cards, filterItemsWithStatus, addItem }}>
      {children}
    </cardsContext.Provider>
  )
}

const useCardContext = () => {
  return useContext(cardsContext)
}

export { CardsContextProvider, useCardContext }
