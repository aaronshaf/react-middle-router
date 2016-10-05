import React from 'react'
import MiddleRouter from 'middle-router'

export default React.createClass({
  displayName: 'Match',

  childContextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return { router: MiddleRouter() }
  },

  getChildContext () {
    return { router: this.state.router }
  },

  componentDidMount () {
    this.state.router.start()
  },

  render () {
    return <div>{this.props.children}</div>
  },

  componentWillUnmount () {
    this.state.router.stop()
  }
})
