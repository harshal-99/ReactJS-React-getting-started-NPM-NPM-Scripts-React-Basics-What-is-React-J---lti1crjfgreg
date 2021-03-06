import React, { useEffect, useRef, useState } from "react";
import '../styles/App.css';

const App = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prevRef = useRef()
  const nextRef = useRef()
  const restartRef = useRef()

  // useEffect(() => {
  //   prevRef.current.setAttribute('disabled', 'true')
  //   restartRef.current.setAttribute('disabled', 'true')
  // }, [])

  const onNext = (event) => {
    // restartRef.current.removeAttribute('disabled')
    // if (currentIndex > 0) {
    //   prevRef.current.removeAttribute('disabled')
    // }
    // if (currentIndex + 1 >= slides.length) {
    //   event.target.setAttribute('disabled', 'true')
    //   return
    // }
    setCurrentIndex(currentIndex + 1)
  }
  const onPrev = (event) => {
    // if (currentIndex < slides.length) {
    //   nextRef.current.removeAttribute('disabled')
    // }
    // if (currentIndex === 0) {
    //   console.log(currentIndex);
    //   // restartRef.current.removeAttribute('disabled')
    //   event.target.setAttribute('disabled', 'true')
    //   return
    // }
    setCurrentIndex(currentIndex - 1)
  }
  const onRestart = (event) => {
    setCurrentIndex(0)
    // restartRef.current.setAttribute('disabled', 'true')
    // prevRef.current.setAttribute('disabled', 'true')
  }
  return (
    <div>
      <div>
        <h1 data-testid="title">{slides[currentIndex].title}</h1>
        <p data-testid="text">{slides[currentIndex].text}</p>
      </div>
      <button data-testid="button-restart" disabled={currentIndex === 0} onClick={onRestart} ref={restartRef}>Restart</button>
      <button data-testid="button-prev" disabled={currentIndex === 0} onClick={onPrev} ref={prevRef}>Prev</button>
      <button data-testid="button-next" disabled={currentIndex === slides.length - 1} onClick={onNext} ref={nextRef}>Next</button>
    </div>
  )
}


export default App;
