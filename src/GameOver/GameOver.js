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

  let savedData = JSON.parse(localStorage.getItem("fash-cards-pb"))

  const restartGame = () => {
    setNumAnswered(0)
    setNumCorrect(0)
    setGameOver(false)
    setResetTimer(true)
  }

  const calculateCorrectRatio = () => {
    const correctRatio = ((numCorrect / numAnswered) * 100).toFixed(0)
    if (correctRatio >= 0) {
      return Number(correctRatio)
    } else {
      return 0
    }
  }

  let calculateCurrentScore = {
    correct: numCorrect,
    answered: numAnswered,
    ratio: calculateCorrectRatio(),
  }

  //save ratio to local
  //display
  //check if ratio AND answered is higher
  //display new high score

  useEffect(() => {
    console.log("one")
    setCurrentScore(calculateCurrentScore)
  }, [])

  useEffect(() => {
    console.log("currentScore", currentScore)
    console.log("savedData", savedData)
    if (
      currentScore.ratio >= savedData.ratio &&
      currentScore.answered >= savedData.answered
    ) {
      console.log("winner ")
      localStorage.setItem("fash-cards-pb", JSON.stringify(currentScore))
      savedData = currentScore
    }
  }, [currentScore])

  console.log(currentScore)
  console.log(savedData)

  return (
    <main id="game-over" className="column">
      <h2>Out of time.</h2>
      <h3 className="center">
        You got {currentScore.correct} out of {currentScore.answered} correct
        for a score of {currentScore.ratio}%.
      </h3>
      {isEqual(currentScore, savedData) ? (
        <h3>This is your new best score!</h3>
      ) : (
        <h3 className="center">
          Your personal best is {savedData.correct} out of {savedData.answered}{" "}
          for {savedData.ratio}%
        </h3>
      )}
      <h3 className="center">Keep up the good work, comrade.</h3>
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
