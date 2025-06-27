import { useNavigate } from "react-router-dom"
export const Loader = () => {

  const navigate = useNavigate();

  return (
    <>
      <h2>Loader Example</h2>
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
