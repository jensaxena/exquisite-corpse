import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Story from './Story'
import Textbox from './Textbox'
import './Main.css'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  render() {

    return (
      <Router>
        <main className="Main">
          <Textbox input={this.props.input} />
          <Link to='/story'>Storytime!</Link>
          <Route path='/story' component={ Story } />
        </main>
      </Router>
    )
  }
}
