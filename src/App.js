import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

export default class App extends Component {
  async componentDidMount() {
    try {
      const response = await axios.get('/healthcheck')
      console.log(response.data)
    }
    catch(error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, world!</h1>
      </div>
    )
  }
}
