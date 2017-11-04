import React, { Component } from 'react';
import StudentGroup from '../components/StudentGroup';

class GroupCreation extends Component {
  constructor(props) {
    super(props)
    this.state ={
      placeholder: ''
    }
  }

  render() {
    return(
      <div>
        This is the GroupCreation container.
        <table>
          <thead>
            <th>Group Number</th>
            <th>Students</th>
          </thead>
          <tbody>
            <StudentGroup />
          </tbody>
        </table>
      </div>
    )
  }
}

export default GroupCreation;
