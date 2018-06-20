import React, { Component } from 'react'
import './Header.css'
import Logo  from './Logo'
// import About from './About'
import Login from './Login'

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Logo  />
        {/* <About /> */}
        <Login />
      </header>
    )
  }
}
