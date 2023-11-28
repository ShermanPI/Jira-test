import generateUUIDv4 from '../utilities/generateUUID'
import { localStorageService, KEYS } from './localStorageService'

const cardsLocalStorageRepository = {
  createTaskCard (data) {
    const cards = localStorageService.get(KEYS.CARD)
    const newCard = { id: generateUUIDv4(), tags: [], status: 'TO DO', ...data }
    cards.push(newCard)
    localStorageService.set(KEYS.CARD, cards)
    return newCard
  },
  getAllTaskCards () {
    return localStorageService.get(KEYS.CARD)
  },
  updateTaskCard ({ id, title, description, asignee, dueDate, status }) {
    const cards = this.getAllTaskCards()
    const indexToEdit = cards.findIndex((el) => el.id === id)
    cards[indexToEdit] = { id, title, description, tags: cards[indexToEdit].tags, asignee, dueDate, status }
    localStorageService.set(KEYS.CARD, cards)
  },
  deleteTaskCard ({ id }) {
    const cards = this.getAllTaskCards()
    localStorageService.set(KEYS.CARD, cards.filter((el) => el.id !== id))
  },
  getTaskCardsWithStatus ({ status = 'TO DO' }) {
    const cards = this.getAllTaskCards()
    const cardsWithStatus = cards.filter(el => el.status === status)
    return cardsWithStatus
  },
  updateSelectedTag ({ note, tag, isActive }) {
    if (!isActive) {
      note.tags.push(tag)
    } else {
      const tagIndexToDelete = note.tags.findIndex((el) => el.id === tag.id)
      if (tagIndexToDelete !== -1) note.tags.splice(tagIndexToDelete, 1)
    }

    const cards = this.getAllTaskCards()
    const indexToEdit = cards.findIndex((el) => el.id === note.id)
    cards[indexToEdit] = note
    localStorageService.set(KEYS.CARD, cards)
    return cards
  }

}

const cardsRepository = cardsLocalStorageRepository

export default cardsRepository
