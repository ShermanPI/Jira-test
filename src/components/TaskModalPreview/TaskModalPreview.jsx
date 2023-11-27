import { useCardContext } from '../../context/cardsContext'
import TaskModal from '../TaskModal/TaskModal'
import './style/TaskModalPreview.css'

export default function TaskModalPreview () {
  const { isTaskModalHidden, activeTaskInfo, toggleIsTaskModalHidden, updateItem } = useCardContext()

  return (
    <>
      <TaskModal isHidden={isTaskModalHidden} handleSubmit={updateItem} toggleIsHidden={toggleIsTaskModalHidden} title='Task Preview' taskInfo={activeTaskInfo} />
    </>
  )
}
