import React from 'react';

// react-materialize
import { Col } from 'react-materialize'

const AnswerText = (props) => {
  return (
    <div>
        <Col s={10} offset='s1'>
          <h4>{ props.student } { (props.student) ? "will answer" : ""}</h4>
        </Col>
    </div>
  )
}

export default AnswerText;
