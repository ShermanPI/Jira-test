import { useCardContext } from '../../context/cardsContext'
import KanbanColumn from '../KanbanColumn/KanbanColumn'
import './style/kenbanStyle.css'

export default function KanbanContainer () {
  const { cards, filterItemsWithStatus } = useCardContext()
  const toDoItems = filterItemsWithStatus({ status: 'TO DO' })
  const inProgessItems = filterItemsWithStatus({ status: 'IN PROGRESS' })
  const doneItems = filterItemsWithStatus({ status: 'DONE' })

  console.log('render de la vaina', toDoItems, cards)
  return (
    <section className='kenban-container'>
      <KanbanColumn title='TO DO' items={toDoItems} />
      <KanbanColumn title='IN PROGRESS' items={inProgessItems} />
      <KanbanColumn title='DONE' items={doneItems} />
    </section>
  )
}
