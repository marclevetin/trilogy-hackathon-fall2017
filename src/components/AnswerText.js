import React from 'react';

// react-materialize
import {Row, Col} from 'react-materialize'

const AnswerText = (props) => {
  return (
    <div>
      <Row>
        <Col s={10} offset='s1'>
          <h4>{ props.student } { (props.student) ? "will answer" : ""}</h4>
        </Col>
      </Row>
    </div>
  )
}

export default AnswerText;
