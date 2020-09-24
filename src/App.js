import React from 'react';
import { Route, Switch } from "react-router-dom";

import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/experience' component={Experience} />
        <Route  path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
