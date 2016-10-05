import React from 'react'
import MiddleRouter from 'middle-router'

export default React.createClass({
  displayName: 'Route',

  propTypes: {
    pattern: React.PropTypes.string,
    exclusive: React.PropTypes.bool
  },

  getInitialState () {
    return {
      router: this.context.router || MiddleRouter(),
      matched: false
    }
  },

  getChildContext () {
    return { router: this.state.router }
  },

  contextTypes: {
    router: React.PropTypes.any
  },

  childContextTypes: {
    router: React.PropTypes.any
  },

  componentDidMount () {
    this.state.router.use(this.props.pattern || '/*', this.enter(this.props.exclusive))
    if (!this.context.router) {
      this.state.router.start()
    }
  },

  enter (exclusive) {
    return ({params, resolve, next, exiting}) => {
      if (!this.isMounted()) return
      this.setState({matched: true})
      if (exclusive) {
        resolve()
      } else {
        next()
      }
      exiting.then(() => {
        if (!this.isMounted()) return
        this.setState({matched: false})
      })
    }
  },

  render () {
    return (
      <div>
        {this.state.matched && this.props.children}
      </div>
    )
  }
})
