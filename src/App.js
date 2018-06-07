import React, { Component } from 'react'
import './App.sass'

let styles1 = {
  width: '150px',
  height: '150px',
  margin: '10px',
  display: 'inline-block',
  backgroundColor: '#57652a'
}
let styles2 = {
  width: '150px',
  height: '150px',
  margin: '10px',
  display: 'inline-block',
  backgroundColor: '#dfdce3'
}
let styles3 = {
  width: '150px',
  height: '150px',
  margin: '10px',
  display: 'inline-block',
  backgroundColor: '#262228'
}
let styles4 = {
  width: '150px',
  height: '150px',
  margin: '10px',
  display: 'inline-block',
  backgroundColor: '#b82601'
}
let styles5 = {
  width: '150px',
  height: '150px',
  margin: '10px',
  display: 'inline-block',
  backgroundColor: '#dcc7aa'
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles1}></div>
        <div style={styles2}></div>
        <div style={styles3}></div>
        <div style={styles4}></div>
        <div style={styles5}></div>
      </div>
    )
  }
}

export default App
