import React from 'react';
import { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

import { Smurf } from './Smurf';

export function Smurfs() {
  const { smurfs } = useContext(SmurfContext);
  return (
    <div>
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
}
