import React, { Component } from 'react';
import './App.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    // boxClick() => {
    //
    // }

  }
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img className="me" src={require('./resources/me.JPG')}/>
          <div className="titles">
          <h1 className="App-title">Joshua Pawlik</h1>
          <h3 className="App-subTitle">Full Stack Software Engineer</h3>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/joshua-pawlik">
          <img className="linkedin" src={require('./resources/linkedin-512.png')}/>
          </a>
          <a href="https://www.github.com/joshawesome12">
          <img className="github" src={require('./resources/github.png')}/>
        </a>
        <a href="mailto:joshuapawlik12@gmail.com">
        <img className="gmail" src={require('./resources/Gmail_Icon.png')}/>
      </a>
          </div>
        </header>

        {/* <p className="App-intro"></p> */}
        <div className="body">

        </div>
        {/* <div className="box"> </div> */}
      </div>
    );
  }
}

export default App;
