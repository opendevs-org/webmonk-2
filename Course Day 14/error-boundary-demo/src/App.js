import { useState, useEffect } from 'react'
import { Child } from './Child'
import './App.css';

function App() {
  
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 5) {
      throw Error('Woopsie, this crashed');
    }
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <Child counter={counter} />
    </div>
  );
}

export default App;
