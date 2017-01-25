import React, { Component } from 'react';
import {Navbar, NavItem, Nav, MenuItem, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import About from './route-components/About';
import Experience from './route-components/Experience';
import Projects from './route-components/Projects';
import Contact from './route-components/Contact';

import Router, { Link } from 'react-router';

export default class BootstrapNavBar extends Component {
	render(){
		return(
		<Navbar inverse collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
			        <a href="#">Daniel Crowder</a>
				</Navbar.Brand>
					<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<LinkContainer eventKey={1} to='/about'>About </LinkContainer>
			        <LinkContainer eventKey={2} to='/experience'>Experience</LinkContainer>
			        <LinkContainer eventKey={3} to='/projects'>Projects</LinkContainer>
			        <LinkContainer eventKey={4} to='/contact'>Contact</LinkContainer>
			    </Nav>
			</Navbar.Collapse>
		</Navbar>
		);
	}
}