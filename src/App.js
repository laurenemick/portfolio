import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </header>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
