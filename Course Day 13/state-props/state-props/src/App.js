import './App.css';
import React from 'react';
import Parent from "./PropsDemo/Parent";

// functional component
function App() {
  return (
    <div className="App">
      <h1>The Counter App</h1>
      <Parent />
    </div>
  );
}

export default App;
