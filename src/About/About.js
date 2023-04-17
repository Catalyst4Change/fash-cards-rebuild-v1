import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

export const About = () => {
  return (
    <main id="about" className="column">
      <h2>About</h2>
      <p>
        This app was made from the Hate Symbols Database maintained by the
        Anti-Defamation League. The ADL fights all forms of antisemitism and
        bias, using innovation and partnerships to drive impact. A global leader
        in combating antisemitism, countering extremism and battling bigotry
        wherever and whenever it happens, ADL works to protect democracy and
        ensure a just and inclusive society for all.
      </p>
      <p>
        As a patriotic antifascist, I feel it is my duty to educate and inspire
        my country to recognize the threat posed by fascist & white supremacist
        ideologies and organizations. Use this app as a tool to quickly
        recognize the signs & symbols of increasingly bold hate-groups. You may
        be unpleasantly surprised how many are present in plain view on any
        given day.
      </p>
      <p>
        Unfortunately the data from ADL is a little outdated and far from
        complete. This list does not contain any references to Q-Anon, Stop The
        Steal, or other MAGA conspiracies. Nor does it mention Proud Boys,
        3%ers, Patriot Prayer or any modern militia movements. Care must be
        taken to quantify and label these organizations.
      </p>
      <Link to="/">
        <button className="menu-button">Back</button>
      </Link>
      <form action="https://www.adl.org/" method="get" target="_blank">
        <button className="menu-button" type="submit">
          ADL.ORG
        </button>
      </form>
    </main>
  )
}