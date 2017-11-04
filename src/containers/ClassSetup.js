import React, { Component } from 'react';
import StudentRow from '../components/StudentRow'

class ClassSetup extends Component {
  constructor(props) {
    super(props)
    this.state ={
      placeholder: ''
    }
  }

  render() {
    return(
      <div>
        This is the ClassSetup container.
        <StudentRow />
      </div>
    )
  }
}

export default ClassSetup;
