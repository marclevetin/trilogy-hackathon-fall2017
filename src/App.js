import React, { Component } from 'react';
import './App.css';

// import containers
import ChooseStudent from './containers/ChooseStudent';
import ClassSetup from './containers/ClassSetup';
import GroupCreation from './containers/GroupCreation';
import TimeTracker from './containers/TimeTracker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Header goes here</h1>
          <h2>Navigation component (fist to fiver, random student, etc)</h2>
        </header>
        <ClassSetup />
        <ChooseStudent />
        <GroupCreation />
        <TimeTracker />
      </div>
    );
  }
}

export default App;
