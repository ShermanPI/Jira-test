import './style/KanbanColumn.css'

export default function KanbanColumn ({ children, title }) {
  return (
    <div className='kanban-column'>
      <h3 className='column-title'>
        {title}
      </h3>
      {children}
    </div>
  )
}
