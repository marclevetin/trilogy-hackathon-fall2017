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
        <TimeTrackerItem />
      </div>
    )
  }
}

export default TimeTracker;
