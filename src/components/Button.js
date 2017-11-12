import React from 'react';

// react-materialize
import {Row, Col, Button} from 'react-materialize'

const Button1 = (props) => {
  return (
    <Row>
      <Col s={10}>
        <Button waves='light' onClick={props.handleClick}>
          {props.name}
        </Button>
      </Col>
    </Row>
  )
}

export default Button1;
