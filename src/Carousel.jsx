// React Stuff  
import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
// jQuery
import $ from "jquery";

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
			      <h3 className="text-carousel">www.CaniGo.co</h3>
			      <div className="text-carousel"><a href="http://www.canigo.co/#/" target="_blank">Live Demo</a></div>
			      <div className="text-carousel"><a href="https://github.com/rramdehol/www.CaniGo.co" target="_blank">GitHub Repo</a></div>
			      <img className="carousel-image" alt="2200x1200" src='https://media.giphy.com/media/26xBIyOaIgpQ3fEc0/source.gif'/>
			    </Carousel.Item>
			    <Carousel.Item>
			      <h3 className="text-carousel">Big Orange Blackjack</h3>
			      <div className="text-carousel"><a href="https://github.com/bullutk/Blackjack" target="_blank">GitHub Repo</a></div>
			      <img className="carousel-image" alt="2200x1200" src='https://media.giphy.com/media/l0ExjH6eLfFRbkoyQ/source.gif'/>
			    </Carousel.Item>
			    <Carousel.Item>
			      <h3 className="text-carousel">Movie App</h3>
			      <div className="text-carousel"><a href="" target="_blank">Live Demo</a></div>
			      <div className="text-carousel"><a href="" target="_blank">GitHub Repo</a></div>
			      <img className="carousel-image" alt="2200x1200" src="https://media.giphy.com/media/l3q2vvKSUEjRqeeyY/source.gif" />
			      </Carousel.Item>
			</Carousel>
			</div>
		);
	}
}
