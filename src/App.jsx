import { useState } from 'react'
import { HomeOne } from './componentsrender/HomeOne'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <HomeOne/>
  </>
  )
}

export default App
