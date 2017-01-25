//dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
//custom components
import App from './App';
import About from './route-components/About';
import Contact from './route-components/Contact';
import Experience from './route-components/Experience';
import Projects from './route-components/Projects';



import './index.css';
var destination = document.getElementById('root');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<Route path="/about" component={About} />
			<Route path="/experience" component={Experience} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact" component={Contact} />
		</Route>
	</Router>,
	destination
)