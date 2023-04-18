import React from "react"
import { Link } from "react-router-dom"

export const GameOver = () => {
  return (
    <main className="column">
      <h2>Out of time.</h2>
      <p>You got X out of Y correct for a score of Z%.</p>
      <p>Keep up the good work, comrade.</p>
      <Link to="/game">
        <button className="menu-button">Start Over</button>
      </Link>
      <button className="menu-button">Study Hall</button>
      <button className="menu-button">Visit the ADL</button>
    </main>
  )
}
