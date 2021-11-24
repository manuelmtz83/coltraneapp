import React, { Component } from 'react';
import Button from './components/button';
import Popup from './components/Popup';
import './Coltrane.scss';

export default class App extends Component 

{
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  buttonPopup = () => {
    this.setState({
      trigger: "false"
    });
  };

  render() {
    
    let { count } = this.state;
    
    return (
    <div className="app">
      <div className="title-app">Alice Coltrane 100%</div>
      <div className="subtitle-app">Anti-Stress at Work Click Therapy</div>
      <h1 className={count < 5 ? "cold0" :
       (count >= 5 && count < 10) ? "cold5" :
       (count >= 10 && count < 20) ? "cold10" :
       (count >= 20 && count < 30) ? "cold20" :
       (count >= 30 && count < 40) ? "cold30" : 
       (count >= 40 && count < 60) ? "cold40" : 
       (count >= 60 && count < 80) ? "cold60" : 
       (count >= 80 && count < 100) ? "cold80" : 
       (count === 100 ) ? "cold100" : 
      null}>
        {count > 100 ? count === 0 : count < 0 ? count === 0 : (count >= 0 && count <= 100) ? count : null  }%
      </h1>
  
      <div className="button-wrapper">
            <Button title={"+"}  task = { () => this.incrementCount() } />
            
      </div>
      <Popup trigger={count >= 100 ? "true" : null}>
      <div className="title">Alice Coltrane Anti-Stress Therapy Center</div>
      <div className="subtitle">We know you're very angry and stressed at this moment, but let the music flow in the background and BREATHE.</div>
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/videoseries?list=PLBWtPvMJyoMExnM0c9YgUooZPP4YRgJLv&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Popup>
    </div>
  );
}}


