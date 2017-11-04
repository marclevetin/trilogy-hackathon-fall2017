import React from 'react';

const RandomStudent = (props) => {
  return (
    <div>
      Student image placeholder<br />
      <p>{ props.name }</p>
      <p>Slack: { props.slack }</p>
      Student status
    </div>
  )
}

export default RandomStudent;
