import React, { useContext } from "react"
import { Card } from "../Card/Card"
import { Database } from "../Context"
import { Carousel } from "../Context"
import "../App.css"
import "./Game.css"

export const Game = () => {
  const [data] = useContext(Database)
  const [carouselIndex, setCarouselIndex] = useContext(Carousel)

  const cardsDisplay = () => {
    return data.map((card, i) => {
      return (
        <div key={i}>
          <Card key={i} card={card} i={i} />
        </div>
      )
    })
  }

  const nextCard = (event) => {
    event.preventDefault()
    setCarouselIndex((carouselIndex) => (carouselIndex += 1))
    console.log(carouselIndex)
  }

  return (
    <section className="game column">
      <div className="carousel-container test-border ">
        <div className="carousel test-border">{cardsDisplay()}</div>
      </div>
    </section>
  )
}
