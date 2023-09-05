import { useState } from 'react';
import './App.css';
import Leaflet from './Leaflet.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Leaflet /> 
    </>
  );
}

export default App;
