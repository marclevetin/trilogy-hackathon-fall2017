import React, { Component } from 'react';
import TimeTrackerItem from '../components/TimeTrackerItem';

class TimeTracker extends Component {
  constructor(props) {
    super(props)
    this.state ={
      placeholder: ''
    }
  }

  render() {
    return(
      <div>
        This is the TimeTracker container.
        <table>
          <thead>
            <tr>
              <th>Class activity</th>
              <th>Mark Complete</th>
            </tr>
          </thead>
          <tbody>
            <TimeTrackerItem />
          </tbody>
        </table>
      </div>
    )
  }
}

export default TimeTracker;
