import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import NavBar from './route-components/NavBar';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

