import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

export const Home = () => {
  return (
    <main className="column">
      <span id="logo">🤬</span>
      <div className="column">
        <Link to="/about">
          <button className="menu-button">About</button>
        </Link>
        <Link to="/newgame">
          <button className="menu-button">New Game</button>
        </Link>
      </div>
    </main>
  )
}
