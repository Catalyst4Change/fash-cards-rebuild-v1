import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import link from "../assets/icons8-external-link-30.png"
import "../App.scss"
import "./GameOver.scss"
import isEqual from "lodash.isequal"

export const GameOver = ({
  numAnswered,
  setNumAnswered,
  numCorrect,
  setNumCorrect,
  setGameOver,
  setResetTimer,
}) => {
  const [currentScore, setCurrentScore] = useState({
    correct: 0,
    answered: 0,
    ratio: 0,
  })

  const [savedData, setSavedData] = useState(
    JSON.parse(localStorage.getItem("fash-cards-pb"))
  )

  const restartGame = () => {
    setNumAnswered(0)
    setNumCorrect(0)
    setGameOver(false)
    setResetTimer(true)
  }

  const calculateCorrectRatio = () => {
    if (numAnswered === 0) {
      return 0
    } else {
      return Number(((numCorrect / numAnswered) * 100).toFixed(0))
    }
  }

  let calculateCurrentScore = {
    correct: numCorrect,
    answered: numAnswered,
    ratio: calculateCorrectRatio(),
  }

  useEffect(() => {
    setCurrentScore(calculateCurrentScore)
  }, [])

  useEffect(() => {
    if (
      currentScore.ratio >= savedData.ratio &&
      currentScore.answered >= savedData.answered
    ) {
      localStorage.setItem("fash-cards-pb", JSON.stringify(currentScore))
      setSavedData(currentScore)
    }
  }, [currentScore, savedData])

  return (
    <main id="game-over" className="column">
      <h2>Out of time.</h2>
      <div className="blur">
        <h3 className="center">
          Your score is:
          <br />
          {currentScore.correct} out of {currentScore.answered} correct <br />
          for a score of {currentScore.ratio}%.
        </h3>
        {isEqual(currentScore, savedData) ? (
          <h3 className="center">This is your new best score!</h3>
        ) : (
          <h3 className="center">
            Your personal best is: <br />
            {savedData.correct} out of {savedData.answered} for{" "}
            {savedData.ratio}%
          </h3>
        )}
        <h3 className="center">Keep up the good work!</h3>
      </div>

      <nav className="nav-menu">
        <button className="menu-button" onClick={restartGame}>
          Start Over
        </button>
        <Link to="/">
          <button className="menu-button">Home</button>
        </Link>
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
