import { useState, useEffect } from "react"
import CounterDisplay from "./counter-display"

const useEffectDemo = () => {
  const [state, setState] = useState({ counter: 0, showChild: true }) // NOTE: useState return [variable, function]

  useEffect(() => {
    // NOTE: Will run only once
    console.log("[ComponentDidMount]")
  }, [])

  useEffect(() => {
    // NOTE: Will run on state update
    console.log("[ComponentDidUpdate]")
  })

  useEffect(() => {
    // NOTE: Will watch for state.counter value
    console.log("[ComponentDidUpdate]", state.counter)
  }, [state.counter])

  useEffect(() => {
    return () => {
      // NOTE: Will run on unmount cleanup
      console.log("[ComponentWillUnMount]")
    }
  }, [])

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

export default useEffectDemo
