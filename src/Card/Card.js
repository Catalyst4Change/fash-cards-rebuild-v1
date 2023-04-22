import React, { useState, useContext, useEffect } from "react"
import { shuffle } from "../components/shuffle.func"
import { StudyList } from "../Context/Context"
import { Carousel } from "../Context/Context"
import { Database } from "../Context/Context"

import "../App.scss"
import "./Card.css"

export const Card = ({ card, answered, setAnswered, correct, setCorrect }) => {
  const [carouselIndex, setCarouselIndex] = useContext(Carousel)
  const [toStudyList, setToStudyList] = useContext(StudyList)
  const [data] = useContext(Database)
  const [flipped, setFlipped] = useState(false)
  const [saved, setSaved] = useState(false)

  const flipCard = () => {
    setFlipped((flipped) => true)
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
    }
  }

  const addCardToStudyList = () => {
    if (!toStudyList.includes(card)) {
      setToStudyList([...toStudyList, card])
      setSaved(true)
      // add to local storage
    }
  }

  const [answers, setAnswers] = useState([])

  const createAnswersList = () => {
    const answersCopy = [card.symbol]
    while (answersCopy.length < 4) {
      const random = Math.floor(Math.random() * 213)
      const randomAnswer = data[random].symbol
      if (!answersCopy.includes(randomAnswer)) {
        answersCopy.push(randomAnswer)
      }
    }
    setAnswers(answersCopy)
  }

  const createAnswerButtons = () => {
    return shuffle(answers).map((button, index) => {
      return (
        <button
          key={"button" + index}
          className="menu-button"
          id={button}
          onClick={(event) => checkCorrect(event, card.symbol)}
        >
          {button}
        </button>
      )
    })
  }

  useEffect(() => {
    createAnswersList()
  }, [data])

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
          <div
            className={`save-button icon ${saved && "greyed-out"}`}
            onClick={(event) => addCardToStudyList(event)}
          >
            💾
          </div>
          <div
            onClick={flipCard}
            className={`flip-button icon ${flipped && "greyed-out"}`}
          >
            🔄
          </div>
        </div>
        {flipped ? (
          <button className="menu-button" onClick={advanceCard}>
            Next
          </button>
        ) : (
          <div className="card-options">{createAnswerButtons()}</div>
        )}
      </section>
    </main>
  )
}
