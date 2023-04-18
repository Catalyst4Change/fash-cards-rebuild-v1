import React, { useEffect, useState } from "react"
import "./Timer.css"

export const Timer = ({ timer, setTimer }) => {
  const [seconds, setSeconds] = useState(60)
  seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000)

  if (seconds === 0) {
    window.location = "/game-over"
  }

  return (
    <span id="timer" className="row">
      Time left: {seconds}s
    </span>
  )
}
