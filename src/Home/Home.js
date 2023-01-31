import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

export const Home = () => {
  return (
    <div className="column">
      <span id="logo">🤬</span>
      <div className="column">
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/newgame">
          <button>New Game</button>
        </Link>
      </div>
    </div>
  )
}
