import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"

export const Stopwatch = () => {

  const navigate = useNavigate();
  const [clockState, setClockState] = useState(false)
  const [time, setTime] = useState(0);

  const idx = useRef(0);
  useEffect(() => {
    if (clockState) {
      idx.current = setInterval(() => setTime(prev => prev+1),1000)
    }
    return () => {
      clearInterval(idx.current)
    }
  }, [clockState])
  const ss: number = Math.floor(time % 60);
  const mm: number = Math.floor(time / 60);
  const hh: number = Math.floor(time / 3600);

  return (
    <>
      <h1>Stopwatch Example</h1>
      <div className="stopwatchContainer">
        <div className="timer">
          <h2>{hh}:{mm}:{ss}</h2>
        </div>
        <div>
          <button
            className="routeButton"
            onClick={() => setClockState(!clockState)}
          >{
              clockState ? "Pause" : "Start"
            }</button>
          <button
            className="routeButton"
            onClick={() => setTime(0)
            }>{
              "Reset"
            }</button>
        </div>
      </div>
      <button
        className="routeButton"
        onClick={() => navigate('/')}
      > Back </button>
      <button
        className="routeButton"
        onClick={() => navigate('/loader')}
      > Loader </button>
    </>
  )
}
