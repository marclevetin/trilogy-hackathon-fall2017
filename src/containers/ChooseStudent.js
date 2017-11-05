import React, { Component } from 'react';
import RandomStudent from '../components/RandomStudent';
import Button from '../components/Button';
import AnswerText from '../components/AnswerText';
import studentdata from '../data/studentdata';

class ChooseStudent extends Component {
  constructor(props) {
    super(props)
    this.state ={
      chosenStudent: '',
      pickedStudents: []
    }

    this.pickRandomStudent = this.pickRandomStudent.bind(this)
  }

  pickRandomStudent() {
    let allStudents = studentdata
    let availableStudents = allStudents.filter(student => this.state.pickedStudents.includes(student.name) === false)
    let sizeOfClass = availableStudents.length
    if (sizeOfClass === 0) {
      let randomNumber = Math.floor(Math.random() * allStudents.length)
      let activeStudent = allStudents[randomNumber]
      this.setState({
        chosenStudent: activeStudent.name,
        pickedStudents: []
      })
    } else {
      let randomNumber = Math.floor(Math.random() * sizeOfClass)
      let activeStudent = availableStudents[randomNumber]
      let pickedStudentState = this.state.pickedStudents
      pickedStudentState.push(activeStudent.name)

      this.setState({
        chosenStudent: activeStudent.name,
        pickedStudents: pickedStudentState
      })
    }
  }

  render() {
    let allStudents = studentdata.map(student => {
      return (
        <RandomStudent
          key = { student.id }
          id = { student.id }
          name = { student.name }
          slack = { student.slack }
        />
      )
    })

    return(
      <div>
        <Button
          name = "Pick a student"
          handleClick = { () => this.pickRandomStudent() }
        />
        <AnswerText
          student = { this.state.chosenStudent }
        />
        { allStudents }
      </div>
    )
  }
}

export default ChooseStudent;
