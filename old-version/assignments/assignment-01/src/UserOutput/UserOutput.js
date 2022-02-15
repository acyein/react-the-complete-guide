import React from 'react';

import './UserOutput.css';

const userOutput = props => {
  return (
    <div className="card">
      <p>Username: {props.username}</p>
      <p>Hello everyone! Nice to meet you</p>
    </div>
  );
};

export default userOutput;
