import React, { useEffect, useState } from "react"
import "./Timer.css"

export const Timer = ({ resetTimer, setResetTimer, onTimerEnd }) => {
  const [seconds, setSeconds] = useState(60)

  useEffect(() => {
    if (seconds > 0) {
      const timeoutId = setTimeout(() => setSeconds(seconds - 1), 1000)
      return () => clearTimeout(timeoutId)
    } else {
      onTimerEnd()
    }
  }, [seconds, onTimerEnd])

  useEffect(() => {
    if (resetTimer) {
      setSeconds(60)
      setResetTimer(false)
    }
  }, [resetTimer, setResetTimer])

  return (
    <span id="timer" className="row">
      Time left: {seconds}s
    </span>
  )
}
