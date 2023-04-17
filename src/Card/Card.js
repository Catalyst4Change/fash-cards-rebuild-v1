import React, { useState, useContext } from "react"
import "./Card.css"
import "../App.css"
import { AnswerButtons } from "../components/AnswerButton/AnswerButtons"
import { Carousel } from "../Context"

export const Card = ({ card, i }) => {
  const [flipped, setFlipped] = useState(false)
  const [carouselIndex, setCarouselIndex] = useContext(Carousel)

  const flipCard = () => {
    setFlipped((flipped) => !flipped)
  }

  const advanceCard = () => {
    setCarouselIndex((carouselIndex) => (carouselIndex += 1))
  }

  const checkCorrect = (event, symbol) => {
    console.log(event.target.id, symbol)
    event.preventDefault()
    if (event.target.id === symbol) {
      advanceCard()
    } else {
      setFlipped((flipped) => !flipped)

      // answerWrong()
    }
  }

  return (
    <main
      style={{ transform: `translateX(-${carouselIndex * 100}%` }}
      className="card-container"
    >
      {/* card itself */}
      <section className={`card  ${flipped ? "flip" : ""}`}>
        <div className="front">
          <div className="card-image-container">
            <img className="card-image" src={card.image} alt="hate symbol" />
          </div>
        </div>
        <div className="back">
          <div className="card-description">
            <p>{card.desc}</p>
          </div>
        </div>
      </section>

      {/* card options */}
      <section className="card-options">
        <div className="card-answers">
          {!flipped && (
            <AnswerButtons
              correctAnswer={card.symbol}
              checkCorrect={checkCorrect}
            />
          )}
          {flipped && (
            <button className="answer-button" onClick={advanceCard}>
              Next Card
            </button>
          )}
        </div>
        <div className="option-icons">
          <span className="save-button icon">💾</span>
          <span onClick={flipCard} className="flip-button icon">
            🔄
          </span>
        </div>
      </section>
    </main>
  )
}
