import React, { Component } from 'react';  
import csv from 'csv';
import StudentRow from '../components/StudentRow';

class ClassSetup extends Component {
  constructor(props) {
    super(props) 
    this.state = {  
      placeholder: '',
      classDataString: '', 
      classDataArray: []      
    }  
    this.onSubmit = this.handleSubmit.bind(this); 
    this.onFileSubmit = this.handleFileSubmit.bind(this);  
    this.handleFiles = this.handleFiles.bind(this); 
  } 
  
  
  handleSubmit(event){ 
    event.preventDefault();
    fetch('/students', {
     method: 'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
      "name": this.name.value, 
      "email": this.email.value, 
      "slack": this.slack.value
     })
    }) 
    .then(function(response) {
      return response.json()
    }).then(function(body) {
      console.log(body); 
    })
  };    

  
  handleFiles(event) {  
    var output = [];   
    var reader = new FileReader(); 
    reader.onload = () => { 
      csv.parse(reader.result, (err, data) => {
          var text = reader.result; 
          output.push(text);  
          console.log("uploaded") 
          this.setState({ classDataString: output }); 

      });   
    };  
    reader.readAsBinaryString(event.target.files[0]);   
  } 

  handleFileSubmit(event){ 
    event.preventDefault();
        
    if (this.state.classDataString === ''){
        alert("No File Selected");
    } else {

      var str = this.state.classDataString 

      var array = str.join(",").slice(0, -1).split("\n") 
      
      var m = array.shift()
      
      var attributes = m.split(",");
      
      let userName = attributes[0]; 
      let userEmail = attributes[1]; 
      let userSlack = attributes[2];
      
      
      var jaySUN = {}; 

      array.forEach(function(userArray, index){  
        var userData = userArray.split(",")
        
        jaySUN[userName]= userData[0];
        jaySUN[userEmail]= userData[1]; 
        jaySUN[userSlack]= userData[2]; 
        
        fetch('/cohorts', { 
          method: 'POST', 
          headers: {'Content-Type':'application/json'},  
          body: JSON.stringify({
            "name": jaySUN[userName], 
            "email": jaySUN[userEmail],  
            "slack": jaySUN[userSlack]
          })
        })
      });  
    } 
  }
   
  render() {  
    let allStudents = this.props.students.map(student => {
      return (
        <StudentRow 
          key = { student.id }
          id = { student.id }
          name = { student.name } 
          email = { student.email }
          slack = { student.slack }
        />
      )
    });
    return(
      <div>
        <h1>This is the ClassSetup container.</h1> 
       
        <h2> Add Student </h2> 
        <form onSubmit={this.onSubmit}> 
          <input ref={(ref) => {this.name = ref}} placeholder="Name" type="text" name="name"/><br /> 
          <input ref={(ref) => {this.email = ref}} placeholder="Email" type="text" email="email"/><br /> 
          <input ref={(ref) => {this.slack = ref}} placeholder="Slack" type="text" slack="slack"/><br />
          <button type="Submit">Add a student manually</button>
        </form>
        
        <br />
        
        <h2> Add Your Class </h2> 

        <form onSubmit={this.onFileSubmit}> 
          <input ref={(ref) => {this.type = ref}} type="file" onChange={this.handleFiles}/><br />   
          <br />
          <button className='btn btn-primary' type="submit">Upload</button>
        </form> 
        
        <br />         

        <table> 
          <tbody>
          <tr>
            <th>Class</th>
            <th>Name</th>
            <th>Email</th>
            <th>Slack</th>
          </tr>
            { allStudents } 
          </tbody>
        </table> 
      </div>  
    )
  }
}

export default ClassSetup;
