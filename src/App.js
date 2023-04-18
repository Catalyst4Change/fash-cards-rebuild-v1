import { Route, Routes } from "react-router-dom"
import { About } from "./About/About"
import { Game } from "./Game/Game"
import { Home } from "./Home/Home"
import { NewGame } from "./NewGame/NewGame"
import { Store } from "./Context/Context.js"
import { GameOver } from "./GameOver/GameOver"
import "./App.scss"
import { StudyHall } from "./StudyHall/StudyHall"

function App() {
  return (
    <main id="app">
      <header>
        <h1 id="banner" className="row">
          Fash-Cards
        </h1>
      </header>

      <section className="main-container">
        <Store>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/new-game" element={<NewGame />} />
            <Route path="/study-hall" element={<StudyHall />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game-over" element={<GameOver />} />
          </Routes>
        </Store>
      </section>
    </main>
  )
}

export default App
