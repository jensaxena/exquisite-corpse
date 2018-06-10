import React, { Component } from 'react'
import './Button.css'

export default class Button extends Component {
  handleClick = (e) => {
    console.log(e)
  }
  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        {this.props.children}
      </button>
    )
  }
}
