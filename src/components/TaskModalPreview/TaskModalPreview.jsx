import { useCardContext } from '../../context/cardsContext'
import TaskModal from '../TaskModal/TaskModal'
import './style/TaskModalPreview.css'

export default function TaskModalPreview ({ title, description, tags, asignee, dueTime }) {
  const { isTaskModalHidden, toggleIsTaskModalHidden } = useCardContext()

  return (
    <>
      <TaskModal isHidden={isTaskModalHidden} toggleIsHidden={toggleIsTaskModalHidden} title='Task Preview' />
    </>
  )
}
