import useToggle from '../../hooks/useToggle'
import './style/CreateTaskCard.css'
import { useCardContext } from '../../context/cardsContext'
import TaskModal from '../TaskModal/TaskModal'

export default function CreateTaskCard ({ buttonClassName }) {
  const [isHidden, toggleIsHidden] = useToggle({ initialValue: false })
  const { addItem } = useCardContext()

  const handleSubmit = (e, selectedAsigneeRef) => {
    if (e.target.classList.contains('task-form')) {
      e.preventDefault()
      const form = new FormData(e.target)
      const title = form.get('title')
      const description = form.get('description')
      const dueDate = form.get('due-time')
      addItem({ title, description, asignee: selectedAsigneeRef.current, dueDate })
      e.target.reset()
    }
  }

  return (
    <>
      <button className='create-modal-btn action-btn' onClick={toggleIsHidden}>
        CREATE NEW TASK
      </button>
      <TaskModal handleSubmit={handleSubmit} isHidden={isHidden} toggleIsHidden={toggleIsHidden} title='Create Task Card' submitButtonText='Create' />
    </>
  )
}
