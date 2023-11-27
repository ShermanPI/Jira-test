import useToggle from '../../hooks/useToggle'
import './style/CreateTaskCard.css'
import generateUUIDv4 from '../../utilities/generateUUID'
import { useCardContext } from '../../context/cardsContext'
import TaskModal from '../TaskModal/TaskModal'

export default function CreateTaskCard ({ buttonClassName }) {
  const [isHidden, toggleIsHidden] = useToggle({ initialValue: false })
  const { addItem } = useCardContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const title = form.get('title')
    const tag = form.get('tag')
    const description = form.get('description')
    const dueDate = form.get('due-time')
    addItem({ title, description, asignee: 'sherman', dueDate, tags: [{ name: tag, id: generateUUIDv4() }] })
  }

  return (
    <>
      <button className={buttonClassName} onClick={toggleIsHidden}>
        Create
      </button>
      <TaskModal handleSubmit={handleSubmit} isHidden={isHidden} toggleIsHidden={toggleIsHidden} title='Create Task Card' />
    </>
  )
}
