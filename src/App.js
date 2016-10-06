import React, { Component } from 'react'
// import BrowserRouter from './lib/Router'
import Router from './lib/Router'

import Basic from './examples/basic'

class App extends Component {
  render() {
    return (
      <div className='container' style={{marginTop: 36}}>
        <Router>
          <div className='row'>
            <div className='col-sm-3'>

              <div title='SVG by Kaique Amorim; see thenounproject.com' style={{width: '100px', height: '100px', margin: 'auto', marginBottom: '24px'}}>
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100"><path d="M50,5C25.147,5,5,25.147,5,50s20.147,45,45,45s45-20.147,45-45S74.853,5,50,5z M48.197,51.05l-9.465-9.465  c-0.329-0.356-0.799-0.58-1.322-0.58c-0.996,0-1.803,0.807-1.803,1.803c0,0.523,0.224,0.993,0.58,1.322l12.49,12.49  c0.329,0.356,0.799,0.58,1.322,0.58s0.993-0.224,1.322-0.58l12.49-12.49c0.356-0.329,0.58-0.799,0.58-1.322  c0-0.996-0.807-1.803-1.803-1.803c-0.523,0-0.993,0.224-1.322,0.58l-9.465,9.465V26.676C63.883,27.597,73.4,37.684,73.4,50  c0,12.923-10.477,23.4-23.4,23.4S26.6,62.923,26.6,50c0-12.316,9.517-22.403,21.597-23.324V51.05z M50,91.377  C27.148,91.377,8.623,72.852,8.623,50c0-22.248,17.559-40.391,39.574-41.335v14.402C34.127,23.995,23,35.695,23,50  c0,14.912,12.088,27,27,27s27-12.088,27-27c0-14.305-11.127-26.005-25.197-26.933V8.665C73.818,9.609,91.377,27.752,91.377,50  C91.377,72.852,72.852,91.377,50,91.377z"></path></svg>
                {/* https://thenounproject.com/search/?q=middle&i=40739 */}
              </div>
              <ul className='nav'>
                <li className='nav-item'>
                  <a href='/'>Getting started</a>
                </li>
              </ul>
            </div>
            <div className='col-sm-9'>
              <h1 style={{marginBottom: '16px'}}>react-middle-router</h1>

              <Basic />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
