import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// react-materialize
import { Navbar, NavItem} from 'react-materialize'


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
      <div>
        <Navbar brand='Class Tools' left>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/setup">Setup</NavItem>
          <NavItem href="/choosestudent">Choose a Student</NavItem>
          <NavItem href="/groups">Create a Group</NavItem>
          <NavItem href="/timetracker">Time Tracker</NavItem>
          <NavItem href="/fisttofive">Fist to Five</NavItem>
        </Navbar>
        <Router>
          <div>
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
