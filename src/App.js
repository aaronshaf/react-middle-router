import React, { Component } from 'react'
// import BrowserRouter from './lib/Router'
import Route from './lib/Route'

class App extends Component {
  render() {
    return (
      <div>
        Hi, Andy.
        <Route>
          <ul>
            <li>
              /
              <ul>
                <Route>
                  <Route exclusive pattern='/'>
                    <li>/</li>
                  </Route>
                  <Route exclusive pattern='/foo'>
                    <li>/foo (exclusive)</li>
                  </Route>
                  <Route pattern='/bar'>
                    <li>/bar</li>
                  </Route>
                  <Route>
                    <li>/catchall</li>
                  </Route>
                </Route>
              </ul>
            </li>
          </ul>
          <div>
            <a href='/'>Go to /</a>
          </div>
          <div>
            <a href='/foo'>Go to /foo</a>
          </div>
          <div>
            <a href='/bar'>Go to /bar</a>
          </div>
          <div>
            <a href='/404'>Go to /404</a>
          </div>
          <Route pattern='/foo'>
            <ul>
              <li>/foo</li>
            </ul>
          </Route>
        </Route>
      </div>
    )
  }
}

export default App
