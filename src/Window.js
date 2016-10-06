import React from 'react'

export default React.createClass({
  displayName: 'PseudoBrowser',

  handleBackClick () {
    window.history.back()
  },

  handleForwardClick () {
    window.history.forward()
  },

  render () {
    return (
      <div style={{
        boxShadow: 'rgba(0, 0, 0, 0.13) 0px 3px 8px',
        border: '1px solid rgb(204, 204, 204)'
      }}>
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '6px',
          display: 'flex',
          borderBottom: '1px solid rgb(204, 204, 204)'
        }}>
          <div className="btn-group" role="group" aria-label="Basic example" style={{width: '118px'}}>
            <button type="button" className="btn btn-link" onClick={this.handleBackClick}>←</button>
            <button type="button" className="btn btn-link" onClick={this.handleForwardClick}>→</button>
          </div>
          <input type="text" defaultValue={window.location.pathname} className="form-control" aria-label="Amount (to the nearest dollar)" style={{width: '100%'}} />
        </div>
        <div style={{
          padding: '12px'
        }}>
          {this.props.children}
        </div>
      </div>
    )
  }
})
