import React from "react"
import { Link } from "react-router-dom"
import "../App.scss"
import link from "../../src/assets/icons8-external-link-30.png"
import { ScrollToTop } from "../components/ScrollToTop"

export const About = () => {
  return (
    <section id="about" className="column">
      <ScrollToTop />
      <h2 className="center">About</h2>
      <div className="blur">
        <p>
          This app was made from the Hate Symbols Database maintained by the
          Anti-Defamation League. The ADL fights all forms of antisemitism and
          bias, using innovation and partnerships to drive impact. A global
          leader in combating antisemitism, countering extremism and battling
          bigotry wherever and whenever it happens, ADL works to protect
          democracy and ensure a just and inclusive society for all.
        </p>
        <p>
          As a patriotic antifascist, I feel it is my duty to educate and
          inspire my country to recognize the existential threat posed by
          fascist & white supremacist ideologies & organizations. Use this app
          as a tool to quickly recognize the signs & symbols of these
          increasingly bold hate-groups. You may be unpleasantly surprised how
          many are present in plain view on any given day.
        </p>
        <p>
          Unfortunately the data from ADL is a little outdated and far from
          complete. This list does not contain any references to Q-Anon, Stop
          The Steal, or other MAGA conspiracies; nor does it mention Proud Boys,
          3%-ers, Patriot Prayer or any modern militia movements. Care must be
          taken to quantify, label, and -of course- fight these organizations.
        </p>
        <p className="center">
          This app was made by <a href="https://catalyst.sex/">Catalyst</a>.
        </p>
        <p className="center">
          You can read about it's creation on{" "}
          <a href="https://github.com/Catalyst4Change/fash-cards-rebuild-v1">
            GitHub
          </a>
          .
        </p>
        <p className="center">
          Please direct all comments, suggestions, <br />
          and death-threats to:
          <br />{" "}
          <a href="mailto:catalystfourchange@icloud.com?subject=Fash Cards">
            CatalystFourChange@iCloud.com
          </a>
        </p>
      </div>
      <Link to="/">
        <button className="menu-button">Back</button>
      </Link>
      <form action="https://www.adl.org/" method="get" target="_blank">
        <button className="menu-button" type="submit">
          Visit ADL.ORG
          <img src={link} alt="link icon" />
        </button>
      </form>
    </section>
  )
}
