import React, { Component } from 'react';
import StudentGroup from '../components/StudentGroup';
import NumberField from '../components/NumberField';

class GroupCreation extends Component {
  constructor(props) {
    super(props)
    this.state ={
      groupSize: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ groupSize: event.target.value })
  }

  render() {
    return(
      <div>
        This is the GroupCreation container.
        <NumberField
          label = "Group size:"
          name = "groupSize"
          placeholder = "Enter number"
          handleChange = { this.handleChange }
        />
        <input type="number" placeholder="How many people in the group?"/>
        <table>
          <thead>
            <tr>
              <th>Group Number</th>
              <th>Students</th>
            </tr>
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
