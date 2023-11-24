import KanbanContainer from './components/KanbanContainer/KanbanContainer'
import './style/index.css'
import './style/app.css'

function App () {
  return (
    <>
      <main className='main-container'>
        <h3>Projects / Mi Own Kanban's Project</h3>
        <h1>Kan Table</h1>
        <KanbanContainer />
      </main>
    </>
  )
}

export default App
