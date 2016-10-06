import React from 'react'
import Router from '../lib/Router'
import Window from '../Window'

function CodeSample1 ({active = false}) {
  return (
    <div>
      <code className={!active && 'inactive'}>{
`<Router pattern='/'>
  <div>Home</div>
</Router>`}</code>
    </div>
  )
}

function CodeSample2 ({active = false}) {
  return (
    <div>
      <code className={!active && 'inactive'}>{
`<Router pattern='/foo' exclusive>
  <div>Foo</div>
</Router>`}</code>
    </div>
  )
}

function CodeSample3 ({active = false}) {
  return (
    <div>
      <code className={!active && 'inactive'}>{
`<Router>
  <div>Catchall</div>
</Router>`}</code>
    </div>
  )
}

export default React.createClass({
  displayName: 'Basic',

  render () {
    return (
      <div>
        <div style={{marginBottom: '18px'}}>
          <code>{'npm install react-middle-router'}</code>
        </div>
        <div style={{marginBottom: '22px'}}>
          <code>{`import Router from 'react-middle-router'`}</code>
        </div>
        <Window>
          <div className='row'>
            <div className='col-sm-2'>
              <div>
                <a href='/'>Home</a>
              </div>
              <div>
                <a href='/foo'>Foo</a>
              </div>
              <div>
                <a href='/bar'>Bar</a>
              </div>
            </div>
            <div className='col-sm-10'>
                <code>{`<Router>`}</code>
                <div style={{marginLeft: '16px'}}>
                  <Router>
                    <Router pattern='/'>
                      <CodeSample1 active />
                      <CodeSample2 />
                      <CodeSample3 active />
                    </Router>

                    <Router pattern='/foo' exclusive>
                      <CodeSample1 />
                      <CodeSample2 active />
                      <CodeSample3 />
                    </Router>
                    <Router pattern='/bar' exclusive>
                      <CodeSample1 />
                      <CodeSample2 />
                      <CodeSample3 active />
                    </Router>
                  </Router>
                </div>
                <code>{`</Router>`}</code>
            </div>
          </div>
        </Window>
      </div>
    )
  }
})
