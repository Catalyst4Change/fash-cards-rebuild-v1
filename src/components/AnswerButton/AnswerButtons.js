import React, { useContext } from "react"
import { Database } from "../../Context/Context"
import { shuffle } from "../shuffle.func"
import "./AnswerButtons.css"

export const AnswerButtons = ({ correctAnswer, checkCorrect }) => {
  const [data] = useContext(Database)
  const answers = []
  answers.push(correctAnswer)

  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 214)
    if (!answers.includes(data[random].symbol)) {
      answers.push(data[random].symbol)
    }
  }

  return shuffle(answers).map((button, index) => {
    return (
      <button
        key={"button" + index}
        className="answer-button"
        id={button}
        onClick={(event) => checkCorrect(event, correctAnswer)}
      >
        {button}
      </button>
    )
  })
}
