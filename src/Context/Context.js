import React, { useEffect, useState, createContext } from "react"
import { shuffle } from "../components/shuffle.func"
import database from "../data.json"

export const Database = createContext()
export const Carousel = createContext()
export const StudyList = createContext()

export const Store = ({ children }) => {
  const [data] = useState(database)

  useEffect(() => {
    shuffle(data)
  }, [])

  const [carouselIndex, setCarouselIndex] = useState(0)
  const [toStudyList, setToStudyList] = useState([])

  return (
    <Database.Provider value={[data]}>
      <Carousel.Provider value={[carouselIndex, setCarouselIndex]}>
        <StudyList.Provider value={[toStudyList, setToStudyList]}>
          {children}
        </StudyList.Provider>
      </Carousel.Provider>
    </Database.Provider>
  )
}
