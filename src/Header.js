import React, { Component } from 'react'
import './Header.css'
import Logo from './Logo'
import Button from './Button'

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Logo />
        <Button>About</Button>
        <Button>Login</Button>
      </header>
    )
  }
}
