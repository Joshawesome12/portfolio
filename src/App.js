import React, { Component } from 'react';
import './App.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus:
      <div className="spinner">
        <div className="flicker-text">Lol sorry, loading a decent-sized image here...
        </div>
      </div>,
      visibility: "hidden me",
      locations:["Junk Junction", "The Block", "Haunted Hills", "Pleasant Park", "Lazy Links", "Tomato Temple", "Wailing Woods", "Loot Lake", "Snobby Shores", "Tilted Towers", "Dusty Divot",
       "Lonely Lodge", "Retail Row", "Shifty Shafts", "Salty Springs", "Frosty Flights", "Fatal Fields", "Paradise Palms", "Happy Hamlet", "Lucky Landing"],
       show:false
    }
  }

  handleImageLoaded = () => {
    this.setState({imageStatus: null}, () => {
      this.setState({visibility:"me fade-in"});
    })
  }

  selectRandom = () => {
    var num = Math.floor(Math.random() * 20);
    // console.log(num)
    var location = this.state.locations[num]
    this.setState({drop: location})
  }

  showDropper = () => {
    // this.setState({show: true})
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img className={this.state.visibility} onProgress={() => {console.log('progress')}} onLoad={this.handleImageLoaded.bind(this)} src={require('./resources/me.JPG')} alt='myself'/>

            {this.state.imageStatus}

          <div className="titles">
            <img className="coffee" onClick={this.showDropper.bind(this)} src={require('./resources/coffee.gif')} alt='coffee gif'/>
            <h1 className="App-title">Joshua Pawlik</h1>
            <h3 className="App-subTitle">Full Stack Software Engineer</h3>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/joshua-pawlik" target="_blank" rel="noopener noreferrer">
              <img className="linkedin" src={require('./resources/social-media/linkedin-512.png')} alt='linkedin'/>
            </a>
            <a href="https://www.github.com/joshawesome12" target="_blank" rel="noopener noreferrer">
              <img className="github" src={require('./resources/social-media/github.png')} alt='github'/>
            </a>
            <a href="mailto:joshuapawlik12@gmail.com">
              <img className="gmail" src={require('./resources/social-media/Gmail_Icon.png')} alt='email'/>
            </a>
            <a href="https://drive.google.com/file/d/1EqgquWoA6wikSxPe8G90i98A8ZapdDV-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img className="resume" src={require('./resources/resume.png')} alt='resume icon'/>
            </a>
          </div>
        </header>
        {/* <p className="App-intro"></p> */}

        <div className='about' id="about">

         <div className='about-title'>
          <h1 className='about-heading'>About Me</h1>
          <div className='line-black'></div>
         </div>

         <div className='about-me'>
            <p className='about-p'>
              Creating with a keyboard is what drives me. My main areas of focus are Javascript, Node.js, MySQL. I am experienced with modern frontend frameworks such as React and AngularJS.<br/>
              I enjoy working with teams and I am always looking to explore new technologies.<br/>
              I consider myself talented at turning caffeine into code.
            </p>
          </div>


        </div>

        <div className='projects' id="projects">
          <h1 className='projects-title'>Projects</h1>
         <div className='project-imgs'>

           <div className='data-world'>

             <div className='project-header'>
               <h3 className='projects-titles'>dataset.tools</h3>
               <a href="https://github.com/PhiDataKappa/dataset.tools">
                 <img className="git" src={require('./resources/red-git.png')} alt='git'/>
               </a>
             </div>

             <div className='container'>
               <img src={require('./resources/data.world.png')} className='data-world-img'alt=''/>
               <div className="overlay">
                 <div className="text">A electron desktop app that lets you easily download and upload your datasets from Data.World without ever having to open your browser.</div>
               </div>
             </div>
         </div>

         <div className='campfire'>

           <div className="project-header">
             <h3 className='projects-titles'>Campfire</h3>
             <a href="https://github.com/Constant-Time/Campfire">
               <img className="git" src={require('./resources/red-git.png')}alt=''/>
             </a>
           </div>

           <a href='http://www.campfireonline.net' className="campfire-link">
           <div className='container'>
             <img src={require('./resources/campfire.png')} className='campfire-img'alt=''/>
             <div className="overlay">
               <div className="text">A storytelling app that allows users to create playful, community-driven stories.(Click to open in browser)</div>
             </div>
           </div>
         </a>
         </div>

         <div className='Covetter'>

           <div className="project-header">
             <h3 className='projects-titles' id='github-fetcher-title'>Covetter</h3>
             <a href="https://github.com/Joshawesome12/Covetter">
               <img className="git" src={require('./resources/red-git.png')}alt=''/>
             </a>
           </div>
            <div className='container'>
               <img src={require('./resources/covetter.png')} className='covetter-img'alt=''/>
               <div className="overlay">
                 <div className="text">An Electron desktop application that accelerates writing similar cover letters</div>
               </div>
             </div>
         </div>

         </div>
       </div> {/*end projects*/}

       <div className="skills" id="skills">

         <h1 className='skills-title'>Skills</h1>

         <div className='skill_icons'>
           <div>
             <h1>Javascript</h1>
             <img className='javascript-img' src={require('./resources/icons/javascript.jpeg')} alt='javscript icon'/>
           </div>
           <div>
             <h1>HTML</h1>
             <img className='html-img' src={require('./resources/icons/icon_html.png')}alt=''/>
           </div>
           <div>
             <h1>CSS</h1>
             <img className='css-img' src={require('./resources/icons/icon_css.png')}alt=''/>
           </div>
           <div>
             <h1>SCSS</h1>
             <img className='sass-img' src={require('./resources/icons/icon_sass.png')}alt=''/>
           </div>
           <div>
             <h1>jQuery</h1>
             <img className='jquery-img' src={require('./resources/icons/icon_jquery.png')}alt=''/>
           </div>
           <div>
             <h1>ReactJS</h1>
             <img className='react-img' src={require('./resources/icons/icon_react.png')}alt=''/>
           </div>
           <div>
             <h1>Redux</h1>
             <img className='redux-img' src={require('./resources/icons/icon_redux.png')}alt=''/>
           </div>
           <div>
             <h1>AngularJS</h1>
             <img className='angular-img' src={require('./resources/icons/icon_angularjs.png')}alt=''/>
           </div>
           <div>
             <h1>Node.js</h1>
             <img className='node-img' src={require('./resources/icons/icon_node.png')}alt=''/>
           </div>
           <div>
             <h1>MySQL</h1>
             <img className='mysql-img' src={require('./resources/icons/icon_mysql.png')}alt=''/>
           </div>

         </div>
       </div>
       <div className='footer'>

         <h1 className='footer-text'>Joshua Pawlik © 2018</h1>

         {/*{this.state.show ?
           <div className="stuff">
           <h2>Random Fortnite Location!! </h2>
           <div className = "stuff2">
            <h2>{this.state.drop}</h2>
            <button className="joke" onClick={this.selectRandom}>Roll!</button>
           </div>
           </div>
           : null } */}

       </div>

       {/* Saved */}
       {/* <div className="navbar">
         <h1>Joshua Pawlik</h1>
         <div className='links'>
           <a href="#about">About Me</a>
           <a href="#projects">Projects</a>
           <a href="#skills">Skills</a>
         </div>
       </div> */}

      </div> //end app
    );
  }
}

export default App;
