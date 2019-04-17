import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Test from './Test';
import Home from './Home';
import './App.sass';
import './test.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    function setTime(){

			const hourHand = document.getElementById('hour');
			const minuteHand = document.getElementById('min');
			const secondHand = document.getElementById('second');

			const now = new Date();

			const seconds = now.getSeconds();
			const minutes = now.getMinutes();
			const hours = now.getHours();

			const secondsDegrees = ((seconds / 60) * 360) + 90;
			secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


			const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
			minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;


			const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
			hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


		}

    setInterval(setTime,1000);

    return (
        <div>
          <nav className="navbar">
            <ul>

              <li><Link to="/">Home</Link></li>
              <li><Link to="/test">Test</Link></li>

            </ul>

            <div className="clock">
    					<div className="clock-face">
    						<div id="hour" className="hand hour-hand"></div>
    						<div id="min" className="hand min-hand"></div>
    						<div id="second" className="hand second-hand"></div>
    					</div>
    				</div>

           </nav>

            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/test" component={Test}/>
        </div>
    );
  }
}

export default App;
