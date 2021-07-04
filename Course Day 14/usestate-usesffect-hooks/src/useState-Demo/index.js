import { useState } from "react"
import CounterDisplay from "./counter-display"

const useStateDemo = () => {
  const [state, setState] = useState({ counter: 0, showChild: true }) // NOTE: useState return [variable, function]

  // const [counter, setCounter] = useState(0);
  // const [showChild, setShowChild] = useState(true);

  return (
    <div className="App">
      <h1>State: {JSON.stringify(state)}</h1>

      <div className="button-section">
        <button
          onClick={() =>
            setState({
              ...state,
              counter: state.counter + 1,
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            setState({
              ...state,
              counter: state.counter - 1,
            })
          }
        >
          Decrement
        </button>
        <button
          onClick={() =>
            setState({
              ...state,
              counter: 0,
            })
          }
        >
          Reset
        </button>
      </div>

      <div className="child-section">
        <button
          onClick={() =>
            setState({
              ...state,
              showChild: !state.showChild,
            })
          }
        >
          Toggle Child
        </button>

        {state.showChild ? <CounterDisplay /> : null}
      </div>
    </div>
  )
}

export default useStateDemo
