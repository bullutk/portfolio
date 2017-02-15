//dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
//custom components
import App from './App';
import About from './route-components/About';
import Contact from './route-components/Contact';
import Experience from './route-components/Experience';
import Projects from './route-components/Projects';
import Home from './route-components/Home';


import './index.css';
const destination = document.getElementById('root');

ReactDOM.render(
	<Router history={hashHistory} >
		<Route path="/" component={App} >
			<IndexRoute component={Home} />
			<Route path="/about" component={About} />
			<Route path="/experience" component={Experience} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact" component={Contact} />
		</Route>
	</Router>,
	destination
)