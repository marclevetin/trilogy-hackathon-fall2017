import React from 'react';

const NumberField = props => {
  return (
    <label>{ props.label }
      <input
        name={ props.name }
        onChange={ props.handleChange }
        type='number'
        placeholder = { props.placeholder }
      />
    </label>
  );
}

export default NumberField;
