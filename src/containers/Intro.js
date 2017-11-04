import React, { Component } from 'react';

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
        This is the Intro component
      </div>
    )
  }
}

export default Intro;
