import { useEffect } from "react"

const CounterDisplay = () => {
  useEffect(() => {
    // NOTE: Will run on state update
    console.log("[Child - ComponentDidUpdate]")
  })

  useEffect(() => {
    return () => {
      // NOTE: Will run on unmount cleanup
      console.log("[Child - ComponentWillUnMount]")
    }
  }, [])

  return (
    <div className="App">
      <h1>Child</h1>
    </div>
  )
}

export default CounterDisplay
