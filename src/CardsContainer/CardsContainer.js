import React, { useContext } from "react"
import { Database } from "../Context/Context"
import { Card } from "../Card/Card"

export const CardsContainer = ({
  numAnswered,
  setNumAnswered,
  numCorrect,
  setNumCorrect,
}) => {
  const [data] = useContext(Database)

  const displayCards = () => {
    return data.map((card, i) => {
      return (
        <Card
          key={i}
          card={card}
          i={i}
          numAnswered={numAnswered}
          setNumAnswered={setNumAnswered}
          numCorrect={numCorrect}
          setNumCorrect={setNumCorrect}
        />
      )
    })
  }

  return <div className="carousel">{displayCards()}</div>
}
