import generateUUIDv4 from '../utilities/generateUUID'

const CardTaskRepositoryPattern = {
  createTaskCard ({ id = generateUUIDv4(), title, description, tags = [], asignee, dueDate }) {
    if (!window.localStorage.getItem('cards')) window.localStorage.setItem('cards', '[]')
    const localStorageCards = window.localStorage.getItem('cards')

    const newCard = { id, title, description, tags, asignee, dueDate, status: 'TO DO' }
    const newCardInfoJson = JSON.stringify(newCard)
    const cards = JSON.parse(localStorageCards)
    cards.push(newCardInfoJson)
    window.localStorage.setItem('cards', JSON.stringify(cards))
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
  updateTaskCard ({ id, title, description, tags, asignee, dueDate, status }) {
    const cards = this.getAllTaskCards()
    const indexToEdit = cards.findIndex((el) => el.id === id)
    cards[indexToEdit] = { id, title, description, tags, asignee, dueDate, status }
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
  }
}

const cardsStorageManagment = CardTaskRepositoryPattern

console.log(CardTaskRepositoryPattern.getTaskCardsWithStatus({ status: 'DONE' }))
CardTaskRepositoryPattern.updateTaskCard({ id: '009b2e4d-f16a-41e8-8f07-922e0e60f90b', title: 'haosld', description: 'esto se suna descrips ciajs', tags: [], asignee: 'sheshe', status: 'DONE' })

export default cardsStorageManagment
