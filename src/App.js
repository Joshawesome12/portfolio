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
      <a href="https://drive.google.com/open?id=1OAejV5dfwhs0lb40x2B3QBTADtEyIZFq">
    <img className="resume" src={require('./resources/resume.png')}/>
    </a>
          </div>
        </header>
        {/* <p className="App-intro"></p> */}
        <div className="skills">

          <h1 className='skills-title'>Skills</h1>

          <div className='skill_icons'>
            <div>
              <h1>HTML</h1>
              <img className='html-img' src={require('./resources/icons/icon_html.png')}/>
            </div>
            <div>
              <h1>CSS</h1>
              <img className='css-img' src={require('./resources/icons/icon_css.png')}/>
            </div>
            <div>
              <h1>Javascript</h1>
              <img className='javascript-img' src={require('./resources/icons/javascript.jpeg')}/>
            </div>
            <div>
              <h1>jQuery</h1>
              <img className='jquery-img' src={require('./resources/icons/icon_jquery.png')}/>
            </div>
            <div>
              <h1>ReactJS</h1>
              <img className='react-img' src={require('./resources/icons/icon_react.png')}/>
            </div>
            <div>
              <h1>AngularJS</h1>
              <img className='angular-img' src={require('./resources/icons/icon_angularjs.png')}/>
            </div>
            <div>
              <h1>Redux</h1>
              <img className='redux-img' src={require('./resources/icons/icon_redux.png')}/>
            </div>
            <div>
              <h1>Node.js</h1>
              <img className='node-img' src={require('./resources/icons/icon_node.png')}/>
            </div>
            <div>
              <h1>MySQL</h1>
              <img className='mysql-img' src={require('./resources/icons/icon_mysql.png')}/>
            </div>
            <div>
              <h1>SCSS</h1>
              <img className='sass-img' src={require('./resources/icons/icon_sass.png')}/>
            </div>

          </div>

        </div>

        <div className='projects'>

          <h1 className='projects-title'>Projects</h1>

         <div className='project-imgs'>

           <div className='data-world'>
             <h3 className='data-world-title'>dataset.tools</h3>
             <div className='container'>
               <img src={require('./resources/data.world.png')} className='data-world-img'/>
               <div class="overlay">
                 <div class="text">A electron desktop app that lets you easily download and upload your datasets from Data.World without ever having to open your browser.</div>
               </div>
             </div>
         </div>

         <div className='campfire'>
           <h3 className='campfire-title'>Campfire</h3>
           <a href='http://www.campfireonline.net' className="campfire-link">
           <div className='container'>
             <img src={require('./resources/campfire.png')} className='campfire-img'/>
             <div class="overlay">
               <div class="text">A storytelling app that allows users to create playful, community-driven stories</div>
             </div>
           </div>
         </a>
         </div>

         </div>



        </div>

      </div>
    );
  }
}

export default App;
