import React from 'react'
import './base.css'
import Navigation from './navigation'

export class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        {children}
      </>
    )
  }
}

export default Template
