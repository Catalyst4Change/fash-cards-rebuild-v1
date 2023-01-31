import React, { useEffect, useState } from "react"
import { shuffle } from "./components/shuffle.func"
import database from "./data.json"

export const Database = React.createContext()
export const Carousel = React.createContext()

export const Store = ({ children }) => {
  const [data] = useState(database)

  useEffect(() => {
    shuffle(data)
  }, [])

  const [carouselIndex, setCarouselIndex] = useState(0)

  return (
    <Database.Provider value={[data]}>
      <Carousel.Provider value={[carouselIndex, setCarouselIndex]}>
        {children}
      </Carousel.Provider>
    </Database.Provider>
  )
}
