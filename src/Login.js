import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleClick = async () => {
    try {
      const res = await axios.post('/login')
      console.log(res.data)
    }
    catch(e) {
      console.log(e)
    }
  }
  handleChange = event => {
    console.log(this.state.value)
    this.setState({
      value: event.target.value
    })
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    // TODO: POST THIS SHIT!
    this.setState({
      value: '',
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <input type="email" onChange={this.handleChange} placeholder="Email" required />
        <input type="password" onChange={this.handleChange} placeholder="Password" required /> */}

        <input type="submit" value="Login" className="button" />
      </form>
    )
  }
}
