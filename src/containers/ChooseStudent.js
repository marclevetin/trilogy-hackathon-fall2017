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
        <RandomStudent />
      </div>
    )
  }
}

export default ChooseStudent;
