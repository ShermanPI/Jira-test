import TaskCard from '../TaskCard/TaskCard'
import './style/KanbanColumn.css'

export default function KanbanColumn ({ title, items }) {
  return (
    <div className='kanban-column'>
      <h3 className='column-title'>
        {title}
      </h3>
      {items.map(el => {
        return (
          <TaskCard title={el.title} key={el.id} asigneeName={el.asignee} tags={el.tags} />
        )
      })}
    </div>
  )
}
