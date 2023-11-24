import generateUUIDv4 from '../utilities/generateUUID'

const CardTaskRepositoryPattern = {
  createTaskCard ({ id = generateUUIDv4(), title, description, tags = [], asignee, dueDate }) {
    const localStorageCards = window.localStorage.getItem('cards')
    if (!localStorageCards) window.localStorage.setItem('cards', '[]')

    const newCardInfoJson = JSON.stringify({ id, title, description, tags, asignee, dueDate })
    const cards = JSON.parse(localStorageCards)
    const newCards = cards.append(newCardInfoJson)
    window.localStorage.setItem('cards', JSON.stringify(newCards))
  },
  getTaskCards () {},
  updateTaskCard () {},
  deleteTaskCard () {}
}

const cardsStorageManagment = CardTaskRepositoryPattern

export default cardsStorageManagment
