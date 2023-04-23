import React from "react"
import "./GameOver.css"
import { Link } from "react-router-dom"
import "../App.scss"
import link from "../assets/icons8-external-link-30.png"
export const GameOver = ({
  answered,
  setAnswered,
  correct,
  setCorrect,
  setGameOver,
  setResetTimer,
}) => {
  const restartGame = () => {
    setAnswered(0)
    setCorrect(0)
    setGameOver(false)
    setResetTimer(true)
  }

  const calculateCorrectRatio = () => {
    const correctRatio = ((correct / answered) * 100).toFixed(0)
    if (correctRatio >= 0) {
      return correctRatio
    } else {
      return 0
    }
  }

  return (
    <main id="game-over" className="column">
      <h2>Out of time.</h2>
      <p>
        You got {correct} out of {answered} correct for a score of{" "}
        {calculateCorrectRatio()}%.
      </p>
      <p>Keep up the good work, comrade.</p>
      <nav className="nav-menu">
        <button className="menu-button" onClick={restartGame}>
          Start Over
        </button>
        <Link to="/study-hall">
          <button className="menu-button">Study Hall</button>
        </Link>
        <form action="https://www.adl.org/" method="get" target="-blank">
          <button type="submit" className="menu-button">
            Visit the ADL
            <img src={link} alt="link icon" />
          </button>
        </form>
      </nav>
    </main>
  )
}
