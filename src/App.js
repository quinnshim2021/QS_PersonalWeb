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
        <img src={profile} alt="img not available"></img>
        <div className="typewriter">
          <h1>Hi, I'm Quinn</h1>
        </div>
        <p>I study Computer Science and Political Science at Northwestern University, class of 2021.</p>
        <p>I am passionate about Software Engineering, Social Justice, and making a social impact on my community.</p>
        <p>Check out more about me!</p>
        <div className='links'>
         {/* Link to Resume Component */}
         <Link className="App-link" to='./Resume.js'>Resume Page</Link>
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
