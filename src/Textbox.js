import React, { Component } from 'react'
import './Textbox.css'

export default class Textbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.props.input(this.state.input)
    this.setState({
      input: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea className="Textbox" onChange={this.handleChange} value={this.state.input} rows="3" cols="33" maxLength="200" wrap="hard"></textarea>

        <input type="submit" value="Submit" className="button"/>
      </form>
    )
  }
}
