import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>
            My Context App
            <Home />
          </h1>
      </div>
    </>
  )
}

export default App
