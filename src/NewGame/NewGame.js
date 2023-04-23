import React from "react"
import { Link } from "react-router-dom"

export const NewGame = () => {
  return (
    <section id="new-game" className="column">
      <p>
        You have 1 minute to guess as many hate-symbols as you can. Each correct
        answer will take you straight to the next card, while incorrect answers
        will flip the card to allow you to learn about that symbol before moving
        on.
      </p>
      <p>
        Clicking the 💾 will save that card in your Study Hall list to view
        later.
      </p>
      <p>
        Clicking 🔄 at any time will flip the card to see the information or
        image.
      </p>
      <p>
        Many of the symbols are unsubtle and can be guessed easily. In these
        cases I encourage you to flip an unfamiliar card to read about the
        symbol's origins.
      </p>
      <p>
        The objective of this exercise is not to 'win', but to expose yourself
        to fascistic symbology and recognize it in the world.
      </p>
      <Link to="/game">
        <button className="menu-button">Start</button>
      </Link>
      <Link to="/">
        <button className="menu-button">Back</button>
      </Link>
    </section>
  )
}
