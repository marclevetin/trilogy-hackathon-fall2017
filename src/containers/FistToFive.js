import React, { Component } from 'react';

import TextField from '../components/TextField';
import Button from '../components/Button';

class FistToFive extends Component {
  constructor(props) {
    super(props)
    this.state ={
      question: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ question: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    // placeholder: sends data to slack bot.
  }

  render() {
    return(
      <form className="callout" onSubmit={this.handleSubmit}>
        <TextField
          label = "What do you want to ask?"
          name = "question"
          value = {this.state.question}
          handleChange = { this.handleChange }
          placeholder = "Question..."
        />
        <Button
          name = "Send"
          handleClick = { this.handleClick }
        />
        <p>high level status</p>
        <p>detailed report</p>
      </form>
    )
  }
}

export default FistToFive;
