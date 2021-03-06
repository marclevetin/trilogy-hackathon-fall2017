import React, { Component } from 'react';
import RandomStudent from '../components/RandomStudent';
import Button1 from '../components/Button1';
import AnswerText from '../components/AnswerText';
// import studentdata from '../data/studentdata';

// react-materialize
import {Row, Col} from 'react-materialize'

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
    let allStudents = this.props.students;
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
    let allStudents = this.props.students.map(student => {
      return (
        <RandomStudent
          key = { student.id }
          id = { student.id }
          name = { student.name }
          slack = { student.slack }
        />
      )
    });

    return(
      <div>
        <Row>
          <Col s={10} offset='s1'>
            <p>&nbsp;</p>
            <Button1
              name = "Choose student"
              handleClick = { () => this.pickRandomStudent() }
            />
          </Col>
        </Row>
        <Row>
          <Col s={10} offset='s1'>
            <AnswerText
              student = { this.state.chosenStudent }
            />
          </Col>
        </Row>
        <Row>
          <Col s={10} offset='s1'>
            { allStudents }
          </Col>
        </Row>
      </div>
    )
  }
}

export default ChooseStudent;
