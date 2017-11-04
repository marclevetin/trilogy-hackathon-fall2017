import React, { Component } from 'react';
import RandomStudent from '../components/RandomStudent';
import studentdata from '../data/studentdata';

class ChooseStudent extends Component {
  constructor(props) {
    super(props)
    this.state ={
      placeholder: ''
    }
  }

  render() {
    let allStudents = studentdata.map(student => {
      debugger;
      return (
        <RandomStudent
          id = { student.id }
          name = { student.name }
          slack = { student.slack }
        />
      )
    })

    return(
      <div>
        <button>Pick a student</button>
        { allStudents }
      </div>
    )
  }
}

export default ChooseStudent;
