import generateUUIDv4 from '../utilities/generateUUID'

const CardTaskRepositoryPattern = {
  createTaskCard ({ id = generateUUIDv4(), title, description, tags = [], asignee, dueDate }) {
    if (!window.localStorage.getItem('cards')) window.localStorage.setItem('cards', '[]')
    const localStorageCards = window.localStorage.getItem('cards')

    const newCardInfoJson = JSON.stringify({ id, title, description, tags, asignee, dueDate })
    const cards = JSON.parse(localStorageCards)
    cards.push(newCardInfoJson)
    window.localStorage.setItem('cards', JSON.stringify(cards))
  },
  getTaskCards () {
    if (!window.localStorage.getItem('cards')) window.localStorage.setItem('cards', '[]')
    const localStorageCards = window.localStorage.getItem('cards')
    const cards = JSON.parse(localStorageCards)
    const totalParseCards = cards.map(el => {
      return JSON.parse(el)
    })

    return totalParseCards
  },
  updateTaskCard ({ id, title, description, tags, asignee, dueDate }) {
    const cards = this.getTaskCards()
    const indexToEdit = cards.findIndex((el) => el.id === id)
    cards[indexToEdit] = { id, title, description, tags, asignee, dueDate }
    const totalStringifyCards = cards.map(el => {
      return JSON.stringify(el)
    })
    window.localStorage.setItem('cards', JSON.stringify(totalStringifyCards))
  },
  deleteTaskCard ({ id }) {
    const cards = this.getTaskCards()
    const indexToDelete = cards.findIndex((el) => el.id === id)
    if (indexToDelete === -1) return -1
    cards.splice(indexToDelete, 1)
    const newCards = cards.map(el => {
      return JSON.stringify(el)
    })
    window.localStorage.setItem('cards', JSON.stringify(newCards))
  }
}

const cardsStorageManagment = CardTaskRepositoryPattern

CardTaskRepositoryPattern.deleteTaskCard({ id: 'cba428aa-412c-4403-a8d4-10fd4f3f05f8' })

export default cardsStorageManagment
