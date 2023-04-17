import { Route, Routes } from "react-router-dom"
import { About } from "./About/About"
import { Game } from "./Game/Game"
import { Home } from "./Home/Home"
import { NewGame } from "./NewGame/NewGame"
import { Store } from "./Context.js"
import "./App.css"

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
            <Route path="/newgame" element={<NewGame />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Store>
      </section>
    </main>
  )
}

export default App
