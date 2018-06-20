import React, { Component } from 'react'
import './Button.css'

export default class About extends Component {
  handleClick = (e) => {
    console.log(e)
  }
  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        About
      </button>
    )
  }
}
