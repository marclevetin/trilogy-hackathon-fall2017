import React from 'react';

// react-materialize
import { Col, Button} from 'react-materialize'

const Button1 = (props) => {
  return (
    <Col s={12}>
      <Button waves='light' onClick={props.handleClick}>
        {props.name}
      </Button>
    </Col>
  )
}

export default Button1;
