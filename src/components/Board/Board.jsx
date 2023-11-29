import CreateTaskCard from '../CreateTaskCard/CreateTaskCard'
import FilterForm from '../FilterForm/FilterForm'
import KanbanContainer from '../KanbanContainer/KanbanContainer'

export const Board = () => {
  return (
    <main className='main-container'>
      <div className='table-title'>
        <h3>Projects / Mi Own Kanban's Project</h3>
        <div className='board-control-container'>
          <h1 className='board-title'>KAN board</h1>
          <CreateTaskCard />
        </div>
      </div>
      <FilterForm />
      <KanbanContainer />
    </main>
  )
}
