import { Route, Routes } from "react-router-dom"
import { About } from "./About/About"
import "./App.css"
import { Game } from "./Game/Game"
import { Home } from "./Home/Home"
import { NewGame } from "./NewGame/NewGame"
import { Store } from "./Context.js"

function App() {
  return (
    <div id="app">
      <header>
        <h1 id="banner" className="row">
          Fash-Cards
        </h1>
      </header>

      <main>
        <Store>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/newgame" element={<NewGame />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Store>
      </main>
    </div>
  )
}

export default App
