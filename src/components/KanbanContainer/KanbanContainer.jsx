import { useMemo } from 'react'
import KanbanColumn from '../KanbanColumn/KanbanColumn'
import './style/kenbanStyle.css'
import TaskCard from '..//TaskCard/TaskCard'
export default function KanbanContainer ({ columns }) {
  const KanbanColumns = useMemo(
    () => columns.map(column => {
      return (
        <KanbanColumn title={column.name} key={column.key}>
          <TaskCard title='sherman' />
          <TaskCard title='sherman' />
          <TaskCard title='sherman' />
          <TaskCard title='sherman' />
        </KanbanColumn>
      )
    }), [columns])

  return (
    <section className='kenban-container'>
      {KanbanColumns}
    </section>
  )
}
