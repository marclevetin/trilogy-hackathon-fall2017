import React, { Component } from 'react';
import StudentGroup from '../components/StudentGroup';
import NumberField from '../components/NumberField';

// react-materialize
import {Row, Col} from 'react-materialize'

// import this.props.students from '../data/this.props.students';

class GroupCreation extends Component {
  constructor(props) {
    super(props)
    this.state ={
      groupSize: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  randomizeStudents(studentArray) {
    // JS doesn't have a shuffle function, nor does it have each_slice.
    // So the strategy is to pick a random student off of the master list,
    // and then put it into a series of smaller arrays.  Those smaller arrays
    // will be grouped together and returned on the page.

    // someData=Object.assign({},someData,{audioUrl:"newAudioUrl"});

    let allGroups = []
    let allStudents = Object.assign([],studentArray)
    let groupSize = this.state.groupSize
    let numberGroups = (groupSize == 0) ? 0 : Math.floor(allStudents.length / groupSize)
    let tempGroup = []


    for (var i = 0; i < numberGroups; i++) {
      // creation of individual group
      for (var j = 0; j < groupSize; j++) {
        let randomNumber = Math.floor(Math.random() * allStudents.length)
        let randomStudent = allStudents.splice(randomNumber, 1)[0].name
        tempGroup.push(randomStudent)
      }

      allGroups.push(tempGroup)
      tempGroup = []
    }

    // assignation of remainder to complete groups
    if (allStudents.length !== 0 && allGroups.length !== 0) {
      for (var k = 0; k < allStudents.length; k++) {
        allGroups[k].push(allStudents[k].name)
      }
    }

    return allGroups
  }

  handleChange(event) {
    this.setState({ groupSize: event.target.value })
  }

  render() {
    let randomGroups = this.randomizeStudents(this.props.students)

    // map randomGroups to something that can be shown on the page.
    let displayGroups = randomGroups.map((group, index) => {
      return(
        <StudentGroup
          key = { Math.random() }
          index = { index + 1 }
          students = { group.join(", ") }
        />
      )
    })

    return(
      <div>
        <Row>
          <Col s={10} offset='s1'>
            <h2>Group Creator</h2>
            <NumberField
              label = "Enter group size"
              name = "groupSize"
              handleChange = { this.handleChange }
            />
          </Col>
        </Row>
        <Row>
          <Col s={10} offset='s1'>
            { displayGroups }
          </Col>
        </Row>
      </div>
    )
  }
}

export default GroupCreation;
