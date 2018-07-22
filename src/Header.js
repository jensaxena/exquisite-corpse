import React, { Component } from 'react'
import './Header.css'
import Logo  from './Logo'
import Login from './Login'

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Logo  />
        <Login />
      </header>
    )
  }
}
