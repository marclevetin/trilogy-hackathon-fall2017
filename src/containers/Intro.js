import React, { Component } from 'react';

// react-materialize
import {Row, Col} from 'react-materialize'

class Intro extends Component {
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
            This is the Intro componentThis is the Intro componentThis is the Intro componentThis is the Intro componentThis is the Intro componentThis is the Intro componentThis is the Intro componentThis is the Intro component
            This is the Intro componentThis is the Intro componentThis is the Intro componentThis is the Intro componentThis is the Intro componentThis is the Intro component
            This is the Intro componentThis is the Intro componentThis is the Intro componentThis is the Intro componentThis is the Intro component
          </Col>
        </Row>

      </div>
    )
  }
}

export default Intro;
