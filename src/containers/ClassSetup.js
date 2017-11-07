import React, { Component } from 'react';
import StudentRow from '../components/StudentRow'

class ClassSetup extends Component {
  constructor(props) {
    super(props) 
    this.state ={
      placeholder: ''
    } 
  } 

  handleSubmit(event){ 
    event.preventDefault();
    fetch('/students', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: {
      "name": this.name.value, 
      "email": this.email.value, 
      "slack": this.slack.value
     }
    });
   };

  render() {
    return(
      <div>
        This is the ClassSetup container. 
        <form onSubmit={this.handleSubmit}> 
          <input ref={(ref) => {this.name = ref}} placeholder="Name" type="text" name="name"/><br /> 
          <input ref={(ref) => {this.email = ref}} placeholder="Email" type="text" name="email"/><br /> 
          <input ref={(ref) => {this.slack = ref}} placeholder="Slack" type="text" name="slack"/><br />
          <button type="Submit">Add a student manually</button>
        </form>
        
        <button>Import student file</button>
        <table>
          <thead>
            <th>Class</th>
            <th>Name</th>
            <th>Email</th>
            <th>Slack</th>
          </thead>
          <tbody>
            <StudentRow />
          </tbody>
        </table>
      </div>
    )
  }
}

export default ClassSetup;
