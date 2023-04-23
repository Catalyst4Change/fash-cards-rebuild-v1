import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "../App.scss"

export const Home = () => {
  useEffect(() => {
    if (localStorage.getItem("fash-cards-pb") === null) {
      localStorage.setItem(
        "fash-cards-pb",
        JSON.stringify({ answered: 0, correct: 0, ratio: 0 })
      )
    }
  }, [])

  return (
    <main className="column">
      <span id="logo">🤬</span>
      <nav className="nav-menu">
        <Link to="/new-game">
          <button className="menu-button">New Game</button>
        </Link>
        <Link to="/study-hall">
          <button className="menu-button">Study Hall</button>
        </Link>
        <Link to="/about">
          <button className="menu-button">About</button>
        </Link>
      </nav>
    </main>
  )
}
