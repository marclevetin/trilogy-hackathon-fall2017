import React from 'react';

const StudentRow = (props) => {
  return (
    <tr>
    <td>College University</td>
      <td>{ props.name }</td>
      <td>{ props.email }</td>
      <td>{ props.slack }</td> 
    </tr> 
  )
}

export default StudentRow;
