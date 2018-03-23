import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Joshua Pawlik</h1>
          <div className="icons">
            <a href="https://www.linkedin.com/in/joshua-pawlik">
          <img className="linkedin" src={require('./resources/linkedin.png')}/>
          </a>
          <a href="https://www.github.com/joshawesome12">
          <img className="github" src={require('./resources/github.png')}/>
        </a>
          </div>
        </header>
        {/* <p className="App-intro"></p> */}
        <div className="body">

        </div>
      </div>
    );
  }
}

export default App;
