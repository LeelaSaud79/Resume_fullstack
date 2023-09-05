import { useState } from 'react';
import './App.css';
import Track from "./Track";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Track />
    </>
  )
}

export default App
