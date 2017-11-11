import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// CSS
import './App.css';

// import containers
import Intro from './containers/Intro';
import ChooseStudent from './containers/ChooseStudent';
import ClassSetup from './containers/ClassSetup';
import GroupCreation from './containers/GroupCreation';
import TimeTracker from './containers/TimeTracker';
import FistToFive from './containers/FistToFive';

// data
import studentdata from './data/studentdata'

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      placeholder: '',
      students: []
    }
  }

  componentDidMount() {
    this.setState({students: studentdata})
    // fetch('/students')
    //   .then(res => res.json())
    //   .then(students => this.setState({ students }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Header goes here</h1>
        </header>
        <Router>
          <div>
            <h2>Navigation component (fist to fiver, random student, etc)</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/setup">Setup</Link></li>
              <li><Link to="/choosestudent">Choose a Student</Link></li>
              <li><Link to="/groups">Create a Group</Link></li>
              <li><Link to="/timetracker">Time Tracker</Link></li>
              <li><Link to="/fisttofive">Fist to Five</Link></li>
            </ul>
            <Route exact path="/" component={Intro} />
            <Route path="/setup" component={ClassSetup} />
            <Route path="/choosestudent" component={() => <ChooseStudent students={this.state.students} />} />
            <Route path="/groups" component={() => <GroupCreation students={studentdata} />} />
            <Route path="/timetracker" component={TimeTracker} />
            <Route path="/fisttofive" component={FistToFive} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
