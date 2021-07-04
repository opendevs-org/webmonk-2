import UseStateDemo from "./useState-Demo/index"
import UseEffectDemo from "./useEffect-Demo/index"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <h1>Use State Demo</h1>
      <UseStateDemo />
      <br />
      <br />
      <br />
      <h1>Use Effect Demo</h1>
      <UseEffectDemo />
    </div>
  )
}

export default App
