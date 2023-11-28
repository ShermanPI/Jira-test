import generateUUIDv4 from '../utilities/generateUUID'

const CardTaskRepositoryPattern = {
  createTaskCard ({ id = generateUUIDv4(), title, description, tags = [], asignee, dueDate, status = 'TO DO' }) {
    if (!window.localStorage.getItem('cards')) window.localStorage.setItem('cards', '[]')
    const localStorageCards = window.localStorage.getItem('cards')
    const newCard = { id, title, description, tags, asignee, dueDate, status }
    const newCardInfoJson = JSON.stringify(newCard)
    const cards = JSON.parse(localStorageCards)
    cards.push(newCardInfoJson)
    window.localStorage.setItem('cards', JSON.stringify(cards))
    return newCard
  },
  getAllTaskCards () {
    if (!window.localStorage.getItem('cards')) window.localStorage.setItem('cards', '[]')
    const localStorageCards = window.localStorage.getItem('cards')
    const cards = JSON.parse(localStorageCards)
    const totalParseCards = cards.map(el => {
      return JSON.parse(el)
    })

    return totalParseCards
  },
  updateTaskCard ({ id, title, description, asignee, dueDate, status }) {
    const cards = this.getAllTaskCards()
    const indexToEdit = cards.findIndex((el) => el.id === id)
    cards[indexToEdit] = { id, title, description, tags: cards[indexToEdit].tags, asignee, dueDate, status }

    const totalStringifyCards = cards.map(el => {
      return JSON.stringify(el)
    })
    window.localStorage.setItem('cards', JSON.stringify(totalStringifyCards))
  },
  deleteTaskCard ({ id }) {
    const cards = this.getAllTaskCards()
    const indexToDelete = cards.findIndex((el) => el.id === id)
    if (indexToDelete === -1) return -1
    cards.splice(indexToDelete, 1)
    const newCards = cards.map(el => {
      return JSON.stringify(el)
    })
    window.localStorage.setItem('cards', JSON.stringify(newCards))
  },
  getTaskCardsWithStatus ({ status = 'TO DO' }) {
    const cards = this.getAllTaskCards()
    const cardsWithStatus = cards.filter(el => el.status === status)
    return cardsWithStatus
  },
  createTag ({ name }) {
    if (!window.localStorage.getItem('tags')) window.localStorage.setItem('tags', '[]')
    const tagList = this.getAllTags()

    const isItemAdded = tagList.some(el => el.name === name)

    if (!isItemAdded) {
      tagList.push({ name, id: generateUUIDv4() })
      window.localStorage.setItem('tags', JSON.stringify(tagList))
      return { name, id: generateUUIDv4() }
    }
  },
  getAllTags () {
    if (!window.localStorage.getItem('tags')) window.localStorage.setItem('tags', '[]')
    const localStorageTags = window.localStorage.getItem('tags')
    return JSON.parse(localStorageTags)
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
    const totalParseCards = cards.map(el => {
      return JSON.stringify(el)
    })
    window.localStorage.setItem('cards', JSON.stringify(totalParseCards))

    return cards
  }
}

const cardsStorageManagment = CardTaskRepositoryPattern
console.log(cardsStorageManagment.getAllTaskCards(), '🙂🙂🙂')

export default cardsStorageManagment
