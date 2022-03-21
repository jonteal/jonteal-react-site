import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/music' component={Music} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
