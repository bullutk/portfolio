import React, { Component } from 'react';
import Autotyper from "../autotype.jsx";

export default class Home extends Component {
	render(){
		return(			
			<div className="welcome">
				<div className="container">
					<div>
						<Autotyper message={"Welcome to the portfolio of"} />
					</div>
					<div className="landing-page-name">
					Daniel Crowder
					</div>
				</div>
			</div>				
		);
	}
}