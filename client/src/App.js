import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './css/style.css';

import Landing from './components/Landing'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path = '/' component = {Landing} />
    </div>
    </BrowserRouter>
  );
}

export default App;
