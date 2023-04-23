import React, { useEffect, useState } from "react"
import "./Timer.css"

export const Timer = ({ resetTimer, setResetTimer, setGameOver }) => {
  const [seconds, setSeconds] = useState(60)

  seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 100)

  if (seconds === 0) {
    setGameOver(true)
  }

  if (resetTimer) {
    setSeconds(60)
    setResetTimer(false)
  }

  return (
    <span id="timer" className="row">
      Time left: {seconds}s
    </span>
  )
}
