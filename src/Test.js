import React, { Component } from 'react';
import './test.sass'


class Test extends Component {
	constructor(props) {
    super(props);
    this.state = {
    }
  }


	componentDidMount(){
  }

	render(){

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

		return (
			<div>
			<h1>TESTING</h1>
			</div>
		);
	}

}


export default Test;
