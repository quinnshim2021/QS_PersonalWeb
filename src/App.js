import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Link, Switch, Route, HashRouter } from 'react-router-dom';
import Resume from './Resume.js';

class Start extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="typewriter">
          <h1>Hi, I'm Quinn</h1>
        </div>
        <div className="homeText">
          <p>I study Computer Science and Political Science at Northwestern University, class of 2021.</p>
          <p>I am passionate about Software Engineering, Social Justice, and making a social impact on my community.</p>
          <p>Follow the links below to find out more about me!</p>
          <div className='links'>
          {/* Link to Resume Component */}
          <Link className="App-link" to='./Resume.js'>Resume Page</Link>
          |
            <a
              className="App-link"
              href="https://www.linkedin.com/in/quinn-shim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          |
            <a
              className="App-link"
              href="https://github.com/quinnshim2021"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          |
            <a
              className="App-link"
              href="mailto:quinnshim2021@u.northwestern.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </header>
      {/* <footer>
        <div>
          <h1>Check out more about me!</h1>
          <iframe src="https://open.spotify.com/embed/playlist/09DUi2TcirehlzoqctL1Dn" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </footer> */}
    </div>
    
  );
  }
}

const Main = () => {
  return(
    <HashRouter>
      <Route exact path='/' component={Start} />
      <Route path='/App.js' component={Start} />
      <Route path='/Resume.js' component={Resume} />
    </HashRouter>
  )
}

function App() {
  return (
    <HashRouter>
      <Main />
    </HashRouter>
  )
}

export default App;
