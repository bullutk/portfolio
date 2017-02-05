// React Stuff  
import React, { Component } from 'react';
import {Carousel, Link} from "react-bootstrap";
// jQuery
import $ from "jquery";
import Video from "./video.jsx"


export default class BootstrapCarousel extends Component{
	// Live Scroll With jQuery
	componentDidMount() {
		$('a[href^="#"]').on('click', function(event) {
    			var target = $(this.getAttribute('href'));
    			if( target.length ) {
        			event.preventDefault();
        		$('html, body').stop().animate({
            	scrollTop: target.offset().top
        		}, 2500);
    		}
		});
	}
	render(){
		return(
			<div id="featured-projects" className="section">
			<div id="featured-projects-header">Featured Projects</div>
			<Carousel className="carousel" height={400} >
			    <Carousel.Item>
			      <img className= "carousel-image" alt="900x500" src='http://i.imgur.com/TcUhReP.png?3'/>
			      <Carousel.Caption>
			        <h3>www.CaniGo.co</h3>
			        <div><a href = "http://www.canigo.co/#/" target="_blank">Live Demo</a></div>
			        <div><a href="https://github.com/rramdehol/www.CaniGo.co" target="_blank">GitHub Repo</a></div>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img className= "carousel-image" alt="900x500" src='http://i.imgur.com/TZLarQH.png?2'/>
			      <Carousel.Caption>
			        <h3>Big Orange Blackjack</h3>
			        <div><a href = "#" target="_blank">Live Demo</a></div>
			        <div><a href="https://github.com/bullutk/Blackjack" target="_blank">GitHub Repo</a></div>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img className= "carousel-image" alt="900x500" src='http://i.imgur.com/L6tD5tR.png?1'/>
			      <Carousel.Caption>
			        <h3>Movie App</h3>
			        <div><a href = "#" target="_blank">Live Demo</a></div>
			        <div><a href="" target="_blank">GitHub Repo</a></div>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <Video />
			      <Carousel.Caption>
			        <h3>Movie App</h3>
			        <div><a href = "#" target="_blank">Live Demo</a></div>
			        <div><a href="" target="_blank">GitHub Repo</a></div>
			      </Carousel.Caption>
			    </Carousel.Item>
			</Carousel>
			</div>
		);
	}
}
