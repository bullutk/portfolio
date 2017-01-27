import React, { Component } from 'react';
import Router, { Link } from 'react-router'
import '../App.css';

export default class NavBar extends Component{
	render(){
		return(
			<div className="navigation">  
				<Link className="hlink" to="/">Hi</Link>
				<Link className="hlink" to="/about">About</Link> 
				<Link className="hlink" to="/projects">Projects</Link>				
				<Link className="hlink" to="/experience">Experience</Link>				
				<Link className="hlink" to="/contact">Contact</Link>
			</div>
		);
	}
}