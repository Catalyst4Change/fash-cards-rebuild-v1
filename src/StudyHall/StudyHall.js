import React, { useContext } from "react"
import { StudyList } from "../Context/Context"
import { Link } from "react-router-dom"
import "../app.scss"
import "./StudyHall.css"

export const StudyHall = () => {
  const [toStudyList, setToStudyList] = useContext(StudyList)

  // remove card from context list

  const displayCardsToStudy = () => {
    return toStudyList.map((card, i) => {
      console.log(card.symbol)
      return (
        <article className="study-card" key={i}>
          <h2>{card.symbol}</h2>
          <img src={card.image} alt={`${card.symbol} symbol`} />
          <p>{card.desc}</p>
          <nav>❌</nav>
        </article>
      )
    })
  }

  return (
    <main>
      <div>{displayCardsToStudy()}</div>
      <nav className="column">
        <Link to="/">
          <button className="menu-button">Back</button>
        </Link>
      </nav>
    </main>
  )
}
