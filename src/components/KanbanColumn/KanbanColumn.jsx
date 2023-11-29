import { useCardContext } from '../../context/cardsContext'
import TaskCard from '../TaskCard/TaskCard'
import './style/KanbanColumn.css'

export default function KanbanColumn ({ title, items }) {
  const { actualDragginTask, moveTaskTo } = useCardContext()

  const handleOnDrop = () => {
    moveTaskTo({ id: actualDragginTask.current.getAttribute('id'), column: title })
  }

  return (
    <div className='kanban-column' onDrop={handleOnDrop} onDragOver={e => e.preventDefault()}>
      <h3 className='column-title'>
        {title}
      </h3>
      {items.map(el => {
        return (
          <TaskCard title={el.title} key={el.id} id={el.id} tags={el.tags} asignee={el.asignee} />
        )
      })}
    </div>
  )
}
