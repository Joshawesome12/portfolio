import React, { Component } from 'react';
import './App.sass';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  //
  // }
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img className="me" src={require('./resources/me.JPG')}/>
          <div className="titles">
          <img className="coffee" src={require('./resources/coffee.gif')}/>
          <h1 className="App-title">Joshua Pawlik</h1>
          <h3 className="App-subTitle">Full Stack Software Engineer</h3>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/joshua-pawlik">
          <img className="linkedin" src={require('./resources/social-media/linkedin-512.png')}/>
          </a>
          <a href="https://www.github.com/joshawesome12">
          <img className="github" src={require('./resources/social-media/github.png')}/>
        </a>
        <a href="mailto:joshuapawlik12@gmail.com">
        <img className="gmail" src={require('./resources/social-media/Gmail_Icon.png')}/>
      </a>
          </div>
        </header>
        {/* <p className="App-intro"></p> */}
        <div className="skills">

          <h1 className='something'>Skills</h1>

          <div className='skill_icons'>
            <img className='javascript-img' src={require('./resources/javascript.jpeg')}/>
            <img className='css-img' src={require('./resources/icon_css.png')}/>
            <img className='jquery-img' src={require('./resources/icon_jquery.png')}/>
            <img className='react-img' src={require('./resources/icon_react.png')}/>
            <img className='angular-img' src={require('./resources/icon_angularjs.png')}/>
            <img className='redux-img' src={require('./resources/icon_redux.png')}/>
            <img className='node-img' src={require('./resources/icon_node.png')}/>
            <img className='mysql-img' src={require('./resources/icon_mysql.png')}/>
          </div>

        </div>

        <div className='projects'>




        </div>

      </div>
    );
  }
}

export default App;
