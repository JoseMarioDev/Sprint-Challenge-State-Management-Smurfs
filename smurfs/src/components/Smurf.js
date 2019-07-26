import React from 'react';

export function Smurf(props) {
  const { name, age, height } = props.smurf;
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
      <h1> {name}</h1>
      <p> Age: {age}</p>
      <p> Height: {height}</p>
    </div>
  );
}
