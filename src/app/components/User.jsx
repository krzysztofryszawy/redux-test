import React from 'react';

function User(props) {
  return (
    <div>
      <p>USER WILL BE HERE: {props.username}</p>
      <button onClick={props.setUsername}>change name</button>
    </div>
  );
}

export default User;
