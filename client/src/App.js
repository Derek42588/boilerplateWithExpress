import React, {useState} from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './css/style.css';

import Landing from './components/Landing'
import Header from './components/Header'

function App() {
  const [showShelf, setShowShelf] = useState(false)

  function toggleShelf() {
    setShowShelf(!showShelf)
  }
  

  return (
    <BrowserRouter>
    <div className="App">
      <Header toggleShelf = {toggleShelf}/>
      <Route exact path = '/' render = {() => <Landing shelfVisible = {showShelf} toggleShelf = {toggleShelf}/>} />
    </div>
    </BrowserRouter>
  );
}

export default App;
