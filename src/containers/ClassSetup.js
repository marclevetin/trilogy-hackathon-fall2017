import React, { Component } from 'react';
import StudentRow from '../components/StudentRow'

// react-materialize
import {Row, Col} from 'react-materialize'


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
        <Row>
          <Col s={10} offset='s1'>
        This is the ClassSetup container.
        <button>Add a student manually</button>
        <button>Import student file</button>
        <table>
          <thead>
            <th>Class</th>
            <th>Name</th>
            <th>Email</th>
            <th>Slack</th>
          </thead>
          <tbody>
            <StudentRow />
          </tbody>
        </table>
      </Col>
    </Row>
      </div>
    )
  }
}

export default ClassSetup;
