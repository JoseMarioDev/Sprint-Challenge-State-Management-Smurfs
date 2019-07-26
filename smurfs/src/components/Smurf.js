import React from 'react';

export function Smurf(props) {
  return (
    <div
      style={{
        border: '1px solid grey',
        display: 'inline-block',
        padding: '10px',
        height: '200px',
        width: '400px',
        margin: '10px',
      }}
    >
      <h1> {props.smurf.name}</h1>
      <p> Age: {props.smurf.age}</p>
      <p> Height: {props.smurf.height}</p>
    </div>
  );
}
