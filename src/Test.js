import React, { Component } from 'react';
import './test.sass'


class Test extends Component {
	constructor(props) {
    super(props);
    this.state = {
			imageStatus:
			<div className="spinner">
        <div className="loader"/>
      </div>,
			visibility:"hidden"
    }
  }


	componentDidMount(){
  }

	handleImageLoaded = () => {
    this.setState({imageStatus: null}, () => {
      this.setState({visibility:""});
    })
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
				<div className="testContent">
					<h1 className="info">Photo featured in this article:</h1>

					<div className="iframeContainer">
					<iframe
						title="statesman"
						className={this.state.visibility}
						id="iframe"
		        src="https://www.statesman.com/news/20171204/commentary-its-time-for-texas-to-step-up-on-computer-science"
		        width="700px"
		        height="500px"
						onLoad={this.handleImageLoaded.bind(this)}
		        frameBorder="0"
		        marginHeight="0"
		        marginWidth="0"
		        />
						{this.state.imageStatus}
					</div>
				</div>
			</div>
		);
	}

}


export default Test;
