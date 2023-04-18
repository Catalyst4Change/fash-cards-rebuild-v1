import React, { useContext, useState } from "react"
import { Card } from "../Card/Card"
import { Database } from "../Context"
import "../App.css"
import "./Game.css"
import { Timer } from "../components/Timer/Timer"

export const Game = () => {
  const [data] = useContext(Database)
  const [gameOver, setGameOver] = useState(false)

  const displayCards = () => {
    return data.map((card, i) => {
      return <Card key={i} card={card} i={i} />
    })
  }

  return (
    <main>
      <Timer setGameOver={setGameOver} />
      <section className="carousel">{displayCards()}</section>
    </main>
  )
}
