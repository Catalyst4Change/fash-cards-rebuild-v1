import React, { useState, useContext, useEffect } from "react"
import { Carousel } from "../Context/Context"
import { StudyList } from "../Context/Context"
import { Database } from "../Context/Context"
import { shuffle } from "../components/shuffle.func"

import "./Card.css"
import "../App.scss"

export const Card = ({ card, answered, setAnswered, correct, setCorrect }) => {
  const [carouselIndex, setCarouselIndex] = useContext(Carousel)
  const [toStudyList, setToStudyList] = useContext(StudyList)
  const [data] = useContext(Database)
  const [flipped, setFlipped] = useState(false)

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
    }
  }

  const addCardToStudyList = () => {
    if (!toStudyList.includes(card)) {
      setToStudyList([...toStudyList, card])

      // add to local storage
    }
  }

  const [answers, setAnswers] = useState([])
  let answerButtons = []

  const createAnswersList = () => {
    console.log("createAnswersList")
    setAnswers([...answers, card.symbol])
    while (answers.length < 4) {
      const random = Math.floor(Math.random() * 213)
      console.log("random", random)
      const randomAnswer = data[random].symbol
      console.log("randomAnswer", randomAnswer)
      if (!answers.includes(randomAnswer)) {
        console.log("!answers")
        setAnswers([...answers, randomAnswer])
      }
    }
  }

  const createAnswerButtons = () => {
    return shuffle(answers).map((button, index) => {
      answerButtons.push(
        <button
          key={"button" + index}
          className="menu-button"
          id={button}
          onClick={(event) => checkCorrect(event, card.symbol)}
        >
          {button}
        </button>
      )
      return button
    })
  }

  useEffect(() => {
    createAnswersList()
    createAnswerButtons()
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
            className="save-button icon"
            onClick={(event) => addCardToStudyList(event)}
          >
            💾
          </div>
          <div onClick={flipCard} className="flip-button icon">
            🔄
          </div>
        </div>
      </section>
      <div>{answerButtons}</div>
    </main>
  )
}
