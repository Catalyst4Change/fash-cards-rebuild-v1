import React, { useContext } from "react"
import { Database } from "../Context"
import { shuffle } from "./shuffle.func"

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
        id={button}
        onClick={(event) => checkCorrect(event, correctAnswer)}
      >
        {button}
      </button>
    )
  })
}
