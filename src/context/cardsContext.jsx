import useToggle from '../hooks/useToggle'
import { createContext, useContext, useRef, useState } from 'react'
import cardsRepository from '../services/taskRepository'
import tagsRepository from '../services/tagRepository'
const cardsContext = createContext()

const CardsContextProvider = ({ children }) => {
  const [cards, setCards] = useState(cardsRepository.getAllTaskCards())
  const actualActiveModal = useRef('')
  const [isTaskModalHidden, toggleIsTaskModalHidden] = useToggle({ initialValue: false })
  const [activeTaskInfo, setActiveTaskInfo] = useState({})
  const [tags, setTags] = useState(tagsRepository.getAllTags())
  const actualDragginTask = useRef()

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
    const newItem = cardsRepository.createTaskCard({ title, description, tags, asignee, dueDate })
    const newItems = [...cards]
    newItems.push(newItem)
    setCards(newItems)
  }

  const deleteItem = ({ id }) => {
    cardsRepository.deleteTaskCard({ id })
    const indexToDelete = cards.findIndex((el) => el.id === id)
    const newCards = [...cards]
    newCards.splice(indexToDelete, 1)
    setCards(newCards)
  }

  const updateItem = ({ formRef, id, selectedAsigneeRef }) => {
    const form = new FormData(formRef.current)
    const title = form.get('title')
    const description = form.get('description')
    const dueDate = form.get('due-time')

    const updatedItem = { id, title, tags: activeTaskInfo.tags, description, dueDate, status: activeTaskInfo.status, asignee: selectedAsigneeRef.current }

    if (JSON.stringify(activeTaskInfo) !== JSON.stringify(updatedItem)) {
      const indexToEdit = cards.findIndex((el) => el.id === id)
      const newCards = [...cards]
      newCards[indexToEdit] = updatedItem
      setCards(newCards)
      cardsRepository.updateTaskCard(updatedItem)
    }
  }

  const addTag = ({ name }) => {
    const itemAdded = tagsRepository.createTag({ name })
    if (itemAdded) {
      const newTags = [...tags]
      newTags.push(itemAdded)
      setTags(newTags)
    }
  }

  const updateSelectedTag = ({ note, tag, isActive }) => {
    const newNotes = cardsRepository.updateSelectedTag({ note, tag, isActive })
    setCards(newNotes)
  }

  const moveTaskTo = ({ id, column }) => {
    const newTasks = [...cards]
    const taskIndexToEdit = newTasks.findIndex(el => el.id === id)
    const taskToEdit = newTasks.splice(taskIndexToEdit, 1)[0]
    cardsRepository.deleteTaskCard({ id })
    if (taskToEdit.status !== column) {
      taskToEdit.status = column
      newTasks.push(taskToEdit)
      setCards(newTasks)
      cardsRepository.updateTasks(newTasks)
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
        updateSelectedTag,
        moveTaskTo,
        actualDragginTask,
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
