import useToggle from '../hooks/useToggle'
import { createContext, useContext, useRef, useState } from 'react'
import cardsStorageManagment from '../services/repositoryPattern'

const cardsContext = createContext()

const CardsContextProvider = ({ children }) => {
  const [cards, setCards] = useState(cardsStorageManagment.getAllTaskCards())
  const actualActiveModal = useRef('')
  const [isTaskModalHidden, toggleIsTaskModalHidden] = useToggle({ initialValue: false })
  const [activeTaskInfo, setActiveTaskInfo] = useState({})

  const showTaskModal = ({ id }) => {
    toggleIsTaskModalHidden()
    const taskIndex = cards.findIndex((el) => el.id === id)
    setActiveTaskInfo(cards[taskIndex])
  }

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
    <cardsContext.Provider value={{ cards, filterItemsWithStatus, addItem, actualActiveModal, isTaskModalHidden, showTaskModal, activeTaskInfo, toggleIsTaskModalHidden }}>
      {children}
    </cardsContext.Provider>
  )
}

const useCardContext = () => {
  return useContext(cardsContext)
}

export { CardsContextProvider, useCardContext }
