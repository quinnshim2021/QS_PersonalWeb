import React, { Component } from 'react';
import './App.css';
import profile from './profile.jpg';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Resume from './Resume.js';

class Start extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile}></img>
        <div class="typewriter">
          <h1>Hi, I'm Quinn</h1>
        </div>
        <p>
          Learn more about me!
        </p>
        <div class='links'>
         {/* Link to Resume Component */}
         <Link class="App-link" to='./Resume.js'>Resume</Link>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/quinn-shim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>
    </div>
  );
  }
}

const Main = () => {
  return(
    <Switch>
      <Route exact path='/' component={Start} />
      <Route path='/App.js' component={Start} />
      <Route path='/Resume.js' component={Resume} />
    </Switch>
  )
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  )
}

export default App;
