import useToggle from '../hooks/useToggle'
import { createContext, useContext, useRef, useState } from 'react'
import cardsStorageManagment from '../services/repositoryPattern'
const cardsContext = createContext()

const CardsContextProvider = ({ children }) => {
  const [cards, setCards] = useState(cardsStorageManagment.getAllTaskCards())
  const actualActiveModal = useRef('')
  const [isTaskModalHidden, toggleIsTaskModalHidden] = useToggle({ initialValue: false })
  const [activeTaskInfo, setActiveTaskInfo] = useState({})
  const [tags, setTags] = useState(cardsStorageManagment.getAllTags())

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
    const description = form.get('description')
    const dueDate = form.get('due-time')

    const updatedItem = { id, title, tags: activeTaskInfo.tags, description, dueDate, status: activeTaskInfo.status, asignee: 'sherman' }

    if (JSON.stringify(activeTaskInfo) !== JSON.stringify(updatedItem)) {
      const indexToEdit = cards.findIndex((el) => el.id === id)
      const newCards = [...cards]
      newCards[indexToEdit] = updatedItem
      setCards(newCards)
      cardsStorageManagment.updateTaskCard(updatedItem)
    }
  }

  const addTag = ({ name }) => {
    const itemAdded = cardsStorageManagment.createTag({ name })
    if (itemAdded) {
      const newTags = [...tags]
      newTags.push(itemAdded)
      setTags(newTags)
    }
  }

  return (
    <cardsContext.Provider value={
      {
        updateItem,
        deleteItem,
        filterItemsWithStatus,
        addItem,
        showTaskModal,
        addTag,
        cards,
        actualActiveModal,
        isTaskModalHidden,
        activeTaskInfo,
        toggleIsTaskModalHidden,
        tags
      }
}
    >
      {children}
    </cardsContext.Provider>
  )
}

const useCardContext = () => {
  return useContext(cardsContext)
}

export { CardsContextProvider, useCardContext }
