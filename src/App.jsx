import KanbanContainer from './components/KanbanContainer/KanbanContainer'
import KanbanColumn from './components/KanbanColumn/KanbanColumn'
import TaskCard from './components/TaskCard/TaskCard'
import './style/index.css'
import './style/app.css'

function App () {
  return (
    <>
      <main className='main-container'>
        <div className='table-title'>
          <h3>Projects / Mi Own Kanban's Project</h3>
          <h1>Kan Table</h1>
        </div>
        <KanbanContainer>
          <KanbanColumn title='TO DO'>
            <TaskCard title='New Card' />
            <TaskCard title='New Card 1' />
            <TaskCard title='New Card 2' />
          </KanbanColumn>

          <KanbanColumn title='IN PROGRESS'>
            <TaskCard title='New Card' />
            <TaskCard title='New Card 1' />
            <TaskCard title='New Card 2' />
          </KanbanColumn>

          <KanbanColumn title='DONE'>
            <TaskCard title='New Card' />
            <TaskCard title='New Card 1' />
            <TaskCard title='New Card 2' />
          </KanbanColumn>

        </KanbanContainer>
      </main>
    </>
  )
}

export default App
