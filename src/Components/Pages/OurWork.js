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
          <h1 className="landscaping-title">Landscaping</h1>
          <p className="landscaping-info">Landscaping is fun</p>
        </div>
        <Footer /> 
    </>
  );
}

export default OurWork;
