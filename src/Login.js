import React, { Component } from 'react'
import axios from 'axios'
import './Button.css'

export default class Login extends Component {
  handleClick = async () => {
    try {
      const res = await axios.post('/login')
      console.log(res.data)
    }
    catch(e) {
      console.log(e)
    }
  }
  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        Login
      </button>
    )
  }
}
