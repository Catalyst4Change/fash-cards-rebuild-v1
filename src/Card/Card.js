import React, { useState, useContext } from "react"
import { AnswerButtons } from "../components/AnswerButton/AnswerButtons"
import { Carousel } from "../Context"
import "./Card.css"
import "../App.css"

export const Card = ({
  card,
  i,
  answered,
  setAnswered,
  correct,
  setCorrect,
}) => {
  const [flipped, setFlipped] = useState(false)
  const [carouselIndex, setCarouselIndex] = useContext(Carousel)

  const flipCard = () => {
    setFlipped((flipped) => !flipped)
  }

  const advanceCard = () => {
    setCarouselIndex((carouselIndex) => (carouselIndex += 1))
  }

  const checkCorrect = (event, symbol) => {
    setAnswered((answered += 1))
    event.preventDefault()
    if (event.target.id === symbol) {
      setCorrect((correct += 1))
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
        <div className="option-icons">
          <div className="save-button icon">💾</div>
          <div onClick={flipCard} className="flip-button icon">
            🔄
          </div>
        </div>
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
      </section>
    </main>
  )
}
