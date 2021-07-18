import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './common/Nav'
import routes from '../router'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Loading....</h2>}>
        <Router>
          <Nav />
          <div className="container">
            <Switch>
              {routes.map(({ path, Component }, i) => (
                <Route
                  key={i}
                  exact
                  path={path}
                  render={() => <Component />}
                />
              ))}
            </Switch>
          </div>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
