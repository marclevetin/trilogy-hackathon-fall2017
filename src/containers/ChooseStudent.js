import React, { Component } from 'react';
import RandomStudent from '../components/RandomStudent'

class ChooseStudent extends Component {
  constructor(props) {
    super(props)
    this.state ={
      placeholder: ''
    }
  }

  render() {
    return(
      <div>
        This is the ChooseStudent container.
        <button>Pick a student</button>
        <RandomStudent />
      </div>
    )
  }
}

export default ChooseStudent;
