import React, { Component } from 'react';  
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropzone from 'react-dropzone'; 
import FontIcon from 'material-ui/FontIcon';
import {blue500} from 'material-ui/styles/colors'; 
import RaisedButton from 'material-ui/RaisedButton'; 
// import AppBar from 'material-ui/AppBar' 
var request = require('superagent');
var apiBaseUrl = "http://localhost:3001"; 


// import StudentRow from '../components/StudentRow';

class ClassSetup extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      placeholder: '',   
      filesPreview:[],
      filesToBeSent:[],  
      printcount:10
    }  
    this.onSubmit = this.handleSubmit.bind(this); 
    this.onClick = this.handleClick.bind(this);
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

  handleClick(event){ 
    console.log("handleClick", event);  
    
    var formData = new FormData();
    

    var filesArray = this.state.filesToBeSent;  
    console.log('file: ' + this.state.filesToBeSent);
    
    formData.append('cohort', filesArray[0][0]);
     
    fetch('/cohorts', {
      method: 'POST',
      headers: {'Content-Type':'multipart/form-dat'},
      body: formData 
    })
  }  


  onDrop(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles[0].name);
    var filesToBeSent = this.state.filesToBeSent; 
    if(filesToBeSent.length < this.state.printcount){ 
      filesToBeSent.push(acceptedFiles); 
      var filesPreview=[]; 
      for(var i in filesToBeSent){
        filesPreview.push(<div>
          {filesToBeSent[i][0].name}
          <MuiThemeProvider>
            <FontIcon className="material-icons customstyle" color={blue500} />
          </MuiThemeProvider>
        </div>
        ) 
      }  
      this.setState({filesToBeSent}); 
    } 
    else {
        alert("You have reached the limit of printing files at a time")
    }
  } 
  
  


  render() { 
    let allFiles = this.state.filesPreview.map(file => {
        return file 
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
        
        
        <center> 
            <div> You can upload up to {this.state.printcount} files at a time.</div>
            <Dropzone onDrop={(files) => this.onDrop(files)}>
                  <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>  
            <div> Files to be printed are: {this.state.filesPreview} </div>
        </center>
          <div> {this.state.printingmessage} </div>

        <MuiThemeProvider>
          <RaisedButton label="Print Files" primary={true} onClick={this.onClick}/>
        </MuiThemeProvider> 

          {allFiles}
        

        {/* <table>
          <thead>
            <th>Class</th>
            <th>Name</th>
            <th>Email</th>
            <th>Slack</th>
          </thead>
          <tbody>
            <StudentRow />
          </tbody>
        </table>  */}
      </div>
    )
  }
}

export default ClassSetup;
