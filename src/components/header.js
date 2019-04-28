import React, { Component } from 'react';

import './head.css';


export default class header extends Component {

    
  render() {
    return (
      <div>

<div class="header">
  <a href="#default" class="logo">JOBHUNTER</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
        
      </div>
    )
  }
}
