import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom'
import { Stopwatch } from './Stopwatch';
import { Loader } from './Loader';
import './App.css'

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h2>My React Practice</h2>
      <button
        className='routeButton'
        onClick={() => navigate('/stopwatch')}
      > Stopwatch </button>
      <button
        className='routeButton'
        onClick={() => navigate('/loader')}
      > Loader </button>
    </>
  )
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/loader" element={<Loader />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
