import { useCardContext } from '../../context/cardsContext'
import CreateTaskModal from '../CreateTaskModal/CreateTaskModal'
import KanbanContainer from '../KanbanContainer/KanbanContainer'

export const Board = () => {
  const { addItem } = useCardContext()

  return (
    <main className='main-container'>
      <div className='table-title'>
        <h3>Projects / Mi Own Kanban's Project</h3>
        <div className='board-control-container'>
          <h1 className='board-title'>KAN board</h1>
          <CreateTaskModal buttonClassName='create-modal-btn' submitFunction={addItem} />
        </div>
      </div>
      <KanbanContainer />
    </main>
  )
}
