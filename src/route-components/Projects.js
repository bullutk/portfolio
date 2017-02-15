import React, { Component } from 'react';
// import { Link } from 'react-router';
import BootstrapCarousel from '../Carousel'

export default class Projects extends Component {
	render(){
		return(
			<div className="pro-main">
				<BootstrapCarousel />	
			</div>
		);
	}
}