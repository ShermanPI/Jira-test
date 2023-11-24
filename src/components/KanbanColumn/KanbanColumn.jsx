import TaskCard from '../TaskCard/TaskCard'
import './style/KanbanColumn.css'

export default function KanbanColumn ({ children }) {
  return (
    <div className='kanban-column'>
      <p>
        Title
      </p>
      <TaskCard />
    </div>
  )
}
