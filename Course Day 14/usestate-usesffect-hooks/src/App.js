import { useState } from 'react'
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0) // NOTE: useState return [variable, function]

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(0);
  }
  
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      
      <div className="button-section">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
