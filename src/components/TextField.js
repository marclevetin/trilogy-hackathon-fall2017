import React from 'react';

const TextField = props => {
  return (
    <label>{ props.label }<br/>
      <input
        name={ props.name }
        onChange={ props.handleChange }
        type='text'
        placeholder = { props.placeholder }
        value = { props.value }
      />
    </label>
  );
}

export default TextField;
