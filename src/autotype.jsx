import React, { Component } from 'react';

export default class Autotyper extends Component{
	render(){
		return(
			<div id="auto-type-box">
				<p id="first-line">{this.props.message}</p>
			</div>
		)
	}
}

