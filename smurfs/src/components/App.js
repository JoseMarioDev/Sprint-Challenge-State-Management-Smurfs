import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { SmurfContext } from '../contexts/SmurfContext';
import SmurfForm from './SmurfForm';
import { Smurfs } from './Smurfs';
import axios from 'axios';
import './App.css';

function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log('RESPONSE', res.data);
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  console.log('smurfs', smurfs);

  return (
    <div className='App'>
      <SmurfContext.Provider value={{ smurfs }}>
        <SmurfForm />
        <Route exact path='/' component={Smurfs} />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
