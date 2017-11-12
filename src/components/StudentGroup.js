import React from 'react';

// react-materialize
import { Card } from 'react-materialize'

const StudentGroup = (props) => {
  let title = "Group " + props.index

  return (
    <Card title={title}>
      {props.students}
    </Card>
  )
}

export default StudentGroup;
