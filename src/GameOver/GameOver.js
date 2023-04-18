import React from "react"
import "./GameOver.css"

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
    return ((correct / answered) * 100).toFixed(0)
  }
  return (
    <main id="game-over" className="column">
      <h2>Out of time.</h2>
      <p>
        You got {correct} out of {answered} correct for a score of{" "}
        {calculateCorrectRatio()}%.
      </p>
      <p>Keep up the good work, comrade.</p>
      <button className="menu-button" onClick={restartGame}>
        Start Over
      </button>
      <button className="menu-button">Study Hall</button>
      <button className="menu-button">Visit the ADL</button>
    </main>
  )
}
