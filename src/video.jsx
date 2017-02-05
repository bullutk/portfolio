import React, { Component } from 'react';

export default class Video extends Component{
	render(){
		return(
			<div>
				<video width="320" height="240" controls>
  					<source src="../videos/movie-app-demo.mov" type="video/mov" />
				</video>
			</div>
		)
	}
}



