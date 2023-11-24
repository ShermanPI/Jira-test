import KanbanColumn from '../KanbanColumn/KanbanColumn'
import './style/kenbanStyle.css'

export default function KanbanContainer () {
  return (
    <section className='kenban-container'>
      <KanbanColumn />
      <KanbanColumn />
      <KanbanColumn />
    </section>
  )
}
