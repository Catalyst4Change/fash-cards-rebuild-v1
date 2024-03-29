import React, { useRef, useEffect } from "react"
import "./TextWall.scss"

const ScrollingText = ({ text, speed }) => {
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth
    const contentWidth = contentRef.current.clientWidth

    const distance = contentWidth - containerWidth

    let animationId

    const step = () => {
      const scrollLeft = containerRef.current.scrollLeft

      if (scrollLeft >= distance) {
        containerRef.current.scrollLeft = 0
      } else {
        containerRef.current.scrollLeft += speed
      }

      animationId = window.requestAnimationFrame(step)
    }

    animationId = window.requestAnimationFrame(step)

    return () => {
      window.cancelAnimationFrame(animationId)
    }
  }, [speed])

  return (
    <div ref={containerRef} className="ticker-container">
      <div className="ticker" ref={contentRef}>
        {text}
      </div>
    </div>
  )
}

export default ScrollingText
