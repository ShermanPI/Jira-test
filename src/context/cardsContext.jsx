import useToggle from '../hooks/useToggle'
import { createContext, useContext, useRef, useState } from 'react'
import cardsStorageManagment from '../services/repositoryPattern'
import generateUUIDv4 from '../utilities/generateUUID'

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

  const deleteItem = ({ id }) => {
    cardsStorageManagment.deleteTaskCard({ id })
    const indexToDelete = cards.findIndex((el) => el.id === id)
    const newCards = [...cards]
    newCards.splice(indexToDelete, 1)
    setCards(newCards)
  }

  const updateItem = ({ formRef, id }) => {
    const form = new FormData(formRef.current)
    const title = form.get('title')
    const tag = form.get('tag')
    const description = form.get('description')
    const dueDate = form.get('due-time')

    const indexToEdit = cards.findIndex((el) => el.id === id)
    const newCards = [...cards]
    newCards[indexToEdit] = { id, title, description, tags: [{ name: tag, id: generateUUIDv4() }], dueDate, asignee: 'sherman' }
    setCards(newCards)
    cardsStorageManagment.updateTaskCard({})

    console.log(title, tag, description, dueDate, '🙂🙂🙂🙂')
    console.log(id, '🚀🚀🚀🚀')
  }

  return (
    <cardsContext.Provider value={{ cards, updateItem, deleteItem, filterItemsWithStatus, addItem, actualActiveModal, isTaskModalHidden, showTaskModal, activeTaskInfo, toggleIsTaskModalHidden }}>
      {children}
    </cardsContext.Provider>
  )
}

const useCardContext = () => {
  return useContext(cardsContext)
}

export { CardsContextProvider, useCardContext }
