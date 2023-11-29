import './style/index.css'
import './style/app.css'
import { CardsContextProvider } from './context/cardsContext'
import { Board } from './components/Board/Board'
import Loader from './components/Loader/Loader'

function App () {
  return (
    <>
      <Loader />
      <CardsContextProvider>
        <Board />
      </CardsContextProvider>
    </>
  )
}

export default App
