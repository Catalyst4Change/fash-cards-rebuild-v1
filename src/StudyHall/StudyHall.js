import React, { useContext } from "react"
import { StudyList } from "../Context/Context"
import { Link } from "react-router-dom"
import "../App.scss"
import "./StudyHall.scss"

export const StudyHall = () => {
  const [toStudyList, setToStudyList] = useContext(StudyList)

  // remove card from context list

  const displayCardsToStudy = () => {
    return toStudyList.map((card, i) => {
      return (
        <article className="study-card" key={i}>
          <h2>{card.symbol}</h2>
          <img src={card.image} alt={`${card.symbol} symbol`} />
          <p>{card.desc}</p>
          <button
            value={i}
            onClick={removeCardFromList}
            className="menu-button delete-button"
          >
            Delete
          </button>
        </article>
      )
    })
  }

  const removeCardFromList = (event) => {
    const indexToRemove = parseInt(event.target.value)
    const listCopy = toStudyList

    const removeCard = listCopy.filter((card, index) => {
      if (index !== indexToRemove) {
        return true
      }
    })

    setToStudyList(removeCard)
  }

  return (
    <main id="study-hall">
      {toStudyList.length === 0 && (
        <p>
          Click on the 💾 icon under a flash card to save it to your study list.
        </p>
      )}
      <div>{displayCardsToStudy()}</div>
      <div className="column center">
        <Link to="/">
          <button className="menu-button">Back</button>
        </Link>
      </div>
    </main>
  )
}
