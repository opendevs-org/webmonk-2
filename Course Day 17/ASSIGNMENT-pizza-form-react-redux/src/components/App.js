import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="container-md">
      <h1 className="display-1">Pizza Maker App!</h1>
      <div className="row py-2 my-2">
        <Suspense fallback={ <h2>Loading....</h2> }>
          <Router>
            <Switch>
              { routes.map(({ path, Component }, i) => (
                <Route
                  key={ i }
                  exact
                  path={ path }
                  render={ () => <Component /> }
                />
              )) }
            </Switch>
          </Router>
        </Suspense>
      </div>
    </div>
  )
}

export default App
