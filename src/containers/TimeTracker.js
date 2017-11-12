import React, { Component } from 'react';
import TimeTrackerItem from '../components/TimeTrackerItem';

// react-materialize
import {Row, Col} from 'react-materialize'

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
        <Row>
          <Col s={10} offset='s1'>
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
      </Col>
    </Row>
      </div>
    )
  }
}

export default TimeTracker;
