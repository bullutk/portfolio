import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import BootstrapNavBar from './BootstrapNavBar';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <BootstrapNavBar />
        {this.props.children}
      </div>
    );
  }
}

