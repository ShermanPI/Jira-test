import KanbanContainer from './components/KanbanContainer/KanbanContainer'
import './style/index.css'
import './style/app.css'
import CreateTaskModal from './components/CreateTaskModal/CreateTaskModal'
import cardsStorageManagment from './services/repositoryPattern'

function App () {
  return (
    <>
      <main className='main-container'>
        <div className='table-title'>
          <h3>Projects / Mi Own Kanban's Project</h3>
          <div className='board-control-container'>
            <h1 className='board-title'>KAN board</h1>
            <CreateTaskModal buttonClassName='create-modal-btn' submitFunction={cardsStorageManagment.createTaskCard} />
          </div>
        </div>
        <KanbanContainer columns={[{ name: 'TO DO', id: 'SHERMAN' }, { name: 'IN PROGRESS', id: 'asasf' }, { name: 'DONE', id: 'oidio' }]} />
      </main>
    </>
  )
}

export default App
