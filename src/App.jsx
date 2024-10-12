import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);
  let [message, setMessage] = useState("");

  // let counter = 0;

  const addValue = () => {
    if (counter >= 100) {
      setMessage("Counter cannot go beyond 100");
    } else {
      setCounter(counter+1);
      setMessage("");
    }
  }

  const removeValue = () => {
    if (counter <= 0) {
      setMessage("Counter cannot go behind 0");
    } else {
      setCounter(counter-1);
      setMessage("");
    }
  }

  return (
    <>
      <h1>Counter using React</h1>
      <h2>Counter value: {counter} </h2> <br />
      <button onClick={addValue} >Add value {counter} </button> <br /> <br />
      <button onClick={removeValue} >Remove value {counter} </button>
      <p> {message} </p>
    </>
  )
}

export default App
