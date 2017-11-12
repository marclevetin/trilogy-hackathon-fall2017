import React from 'react';

// react-materialize
import { Input } from 'react-materialize'

const NumberField = props => {
  return (
      <Input
        name={ props.name }
        label={ props.label }
        onChange={ props.handleChange }
        type='number'
      />
  );
}

export default NumberField;
