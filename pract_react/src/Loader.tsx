import { useState } from "react";
import { useNavigate } from "react-router-dom"
export const Loader = () => {

  // 1: add a button
  // 2: button onClick event add a new loaderDiv
  // 3: when created new loaderDiv the loading animation should start
  // 4: Any three loading animation should run other should wait till any on of the loading animation is not completed
  const navigate = useNavigate();
  const [loaderCount, setLoaderCount] = useState(0);
  return (
    <>
      <h1>Loader Example</h1>
      <div className="loaderContainer">
        <button
          className="routeButton"
          onClick={() => setLoaderCount(prev => prev+1)}
        >Add</button>
        {
          loaderCount
        }
      </div>
      <button
        className="routeButton"
        onClick={() => navigate('/')}
      > Back </button>
      <button
        className="routeButton"
        onClick={() => navigate('/stopwatch')}
      > Stopwatch </button>
    </>
  )
}
