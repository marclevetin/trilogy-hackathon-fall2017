import React from 'react';

// react-materialize
import {Col, Card} from 'react-materialize'


const RandomStudent = (props) => {
  return (
    <div>
      <Col s={3}>
        <Card>
          { props.name }<br />
          { props.slack }
        </Card>
    </Col>
    </div>
  )
}

export default RandomStudent;
