import React, { useContext, useRef, useState } from "react"
import "../App.css"
import "./Game.css"
import { Timer } from "../components/Timer/Timer"
import { CardsContainer } from "../CardsContainer/CardsContainer"
import { GameOver } from "../GameOver/GameOver"

export const Game = () => {
  const [answered, setAnswered] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [resetTimer, setResetTimer] = useState(false)

  return (
    <main>
      {gameOver ? (
        <GameOver
          answered={answered}
          setAnswered={setAnswered}
          correct={correct}
          setCorrect={setCorrect}
          setGameOver={setGameOver}
          setResetTimer={setResetTimer}
        />
      ) : (
        <>
          <Timer
            resetTimer={resetTimer}
            setResetTimer={setResetTimer}
            setGameOver={setGameOver}
          />
          <CardsContainer
            answered={answered}
            setAnswered={setAnswered}
            correct={correct}
            setCorrect={setCorrect}
          />
        </>
      )}
    </main>
  )
}
