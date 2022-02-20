import React from 'react';
import '../../App.css'
import { Button } from '../Button/Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className="hero-container">
        <h1>Welcome to JW Construction LTD</h1>
        <p>Your vision, is our mission.</p>
        <div className="hero-btns">
            <Button 
            className="btns"
            buttonStyle="btn--primary" 
            buttonSize="btn--large"
            >
                Contact us <i className="fa fa-phone"/>
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;
