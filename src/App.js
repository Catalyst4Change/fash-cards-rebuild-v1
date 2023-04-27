import { Route, Routes } from "react-router-dom"
import { About } from "./About/About"
import { Game } from "./Game/Game"
import { Home } from "./Home/Home"
import { NewGame } from "./NewGame/NewGame"
import { Store } from "./Context/Context.js"
import { GameOver } from "./GameOver/GameOver"
import "./App.scss"
import { StudyHall } from "./StudyHall/StudyHall"
import ScrollingText from "./TextWall/TextWall"
import data from "./data.json"
import { shuffle } from "./components/shuffle.func"
import { useState } from "react"

function App() {
  const scrollNumber = Array.from(Array(30).keys())
  const getSymbolNames = () => {
    return data.map((object) => {
      return object.symbol + " • "
    })
  }

  const buildTextWall = () => {
    const checkOdd = (number) => {
      if (number % 2 == 0) {
        return false
      } else {
        return true
      }
    }
    return scrollNumber.map((number, i) => {
      const randomSpeed = Math.random() * (2 - 0.5) + 0.5
      return (
        <ScrollingText
          text={shuffle(getSymbolNames())}
          speed={randomSpeed}
          key={number}
          isOdd={checkOdd(number)}
        />
      )
    })
  }

  return (
    <main id="app">
      <div id="background">{buildTextWall()}</div>

      <header>
        <h1 id="banner" className="row">
          FASH-CARDS
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
