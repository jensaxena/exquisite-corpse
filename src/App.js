import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './App.css'

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
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
