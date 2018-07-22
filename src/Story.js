import React, { Component } from 'react'
import axios from 'axios'

export default class Story extends Component {
  state = {
    story: [],
    paragraphs: [],
  }

  refresh = async () => {
    const res = await axios.get('/stories')
    console.log(res)
    this.setState({
      story: res.data[0],
      paragraphs: res.data[0].paragraphs
    })
  }

  async componentDidMount () {
    this.refresh()
  }

  render() {
    return (
      <div>
        <h2>{ this.state.story.title }</h2>
        { this.state.paragraphs.map( paragraph =>
          <p>{ paragraph.sentences.map( sentence =>
            <span>{ sentence.content }&#32;</span>)}
          </p>
        )}
      </div>
    )
  }
}
