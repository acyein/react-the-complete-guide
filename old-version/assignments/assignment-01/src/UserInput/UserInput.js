import React from 'react';

const userInput = props => {
  const inputStyle = {
    border: '2px solid orange',
  };

  return (
    <input
      type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.currentName}
      placeholder="Change username"
    ></input>
  );
};

export default userInput;
