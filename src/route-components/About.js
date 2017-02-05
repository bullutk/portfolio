import React, { Component } from 'react';

export default class About extends Component {
	render(){
		return(
			<div className="abt">
				<div className="abt-title">
					My name is Daniel.
				</div>

				<div className="abt-body">
					I am a food truck owner turned full stack web developer based in Knoxville, TN.
				</div>

				<div className="abt-skils">
					What I know: <br />

					What I am learning:
				</div>
			</div>
		);
	}
}