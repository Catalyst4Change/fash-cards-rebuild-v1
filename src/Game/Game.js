import React, { useContext, useRef, useState } from "react"
import "../App.scss"
import "./Game.css"
import { Timer } from "../components/Timer/Timer"
import { CardsContainer } from "../CardsContainer/CardsContainer"
import { GameOver } from "../GameOver/GameOver"

export const Game = () => {
  const [numAnswered, setNumAnswered] = useState(0)
  const [numCorrect, setNumCorrect] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [resetTimer, setResetTimer] = useState(false)

  const handleTimerEnd = () => {
    setGameOver(true)
  }

  return (
    <main>
      {gameOver ? (
        <GameOver
          numAnswered={numAnswered}
          setNumAnswered={setNumAnswered}
          numCorrect={numCorrect}
          setNumCorrect={setNumCorrect}
          setGameOver={setGameOver}
          setResetTimer={setResetTimer}
        />
      ) : (
        <>
          <Timer
            resetTimer={resetTimer}
            setResetTimer={setResetTimer}
            onTimerEnd={handleTimerEnd}
          />
          <CardsContainer
            numAnswered={numAnswered}
            setNumAnswered={setNumAnswered}
            numCorrect={numCorrect}
            setNumCorrect={setNumCorrect}
          />
        </>
      )}
    </main>
  )
}
