import React from 'react';
import Footer from '../Footer/Footer';
import OurWorkHero from '../OurWorkHero/OurWorkHero';
import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';
import './PagesCss/OurWork.css'

function OurWork() {
  return (
    <>
        <OurWorkHero />
        <div className="landscaping-container">
          <ImageSlider slides={SliderData}/>
          <div className="landscaping-text">
            <h1 className="landscaping-title">Landscaping</h1>
          </div>  
        </div>
        <Footer /> 
    </>
  );
}

export default OurWork;
