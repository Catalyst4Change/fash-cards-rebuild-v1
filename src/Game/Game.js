import React, { useContext } from "react"
import { Card } from "../Card/Card"
import { Database } from "../Context"
import "../App.css"
import "./Game.css"

export const Game = () => {
  const [data] = useContext(Database)

  const displayCards = () => {
    return data.map((card, i) => {
      return <Card key={i} card={card} i={i} />
    })
  }

  return <section className="carousel">{displayCards()}</section>
}
