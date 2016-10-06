import React, { Component } from 'react'
// import BrowserRouter from './lib/Router'
import Router from './lib/Router'

class App extends Component {
  render() {
    return (
      <div style={{padding: '40px'}}>
        <h1>react-middle-router</h1>
        <Router hash='#'>
          <ul>
            <li>
              /
              <ul>
                <Router>
                  <Router exclusive pattern='/'>
                    <li>/</li>
                  </Router>
                  <Router exclusive pattern='/foo'>
                    <li>/foo (exclusive)</li>
                  </Router>
                  <Router pattern='/bar'>
                    <li>/bar</li>
                  </Router>
                  <Router>
                    <li>/catchall</li>
                  </Router>
                </Router>
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
          <Router pattern='/foo'>
            <ul>
              <li>/foo</li>
            </ul>
          </Router>
        </Router>
<pre style={{backgroundColor: '#eee', padding: '12px'}}>{`<Router hash='#'>
  <ul>
    <li>
      /
      <ul>
        <Router>
          <Router exclusive pattern='/'>
            <li>/</li>
          </Router>
          <Router exclusive pattern='/foo'>
            <li>/foo (exclusive)</li>
          </Router>
          <Router pattern='/bar'>
            <li>/bar</li>
          </Router>
          <Router>
            <li>/catchall</li>
          </Router>
        </Router>
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
  <Router pattern='/foo'>
    <ul>
      <li>/foo</li>
    </ul>
  </Router>
</Router>
`}</pre>
      </div>
    )
  }
}

export default App
