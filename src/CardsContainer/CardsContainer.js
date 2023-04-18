import React, { useContext } from "react"
import { Database } from "../Context/Context"
import { Card } from "../Card/Card"

export const CardsContainer = ({
  answered,
  setAnswered,
  correct,
  setCorrect,
}) => {
  const [data] = useContext(Database)

  const displayCards = () => {
    return data.map((card, i) => {
      return (
        <Card
          key={i}
          card={card}
          i={i}
          answered={answered}
          setAnswered={setAnswered}
          correct={correct}
          setCorrect={setCorrect}
        />
      )
    })
  }

  return <div className="carousel">{displayCards()}</div>
}
