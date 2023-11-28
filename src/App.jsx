import './style/index.css'
import './style/app.css'
import { CardsContextProvider } from './context/cardsContext'
import { Board } from './components/Board/Board'

function App () {
  return (
    <CardsContextProvider>
      <Board />
    </CardsContextProvider>
  )
}

export default App
