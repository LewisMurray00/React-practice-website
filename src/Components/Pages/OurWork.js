import React from 'react';
import Footer from '../Footer/Footer';
import OurWorkHero from '../OurWorkHero/OurWorkHero';
import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';

function OurWork() {
  return (
    <>
        <OurWorkHero />
        <ImageSlider slides={SliderData}/>
        <Footer /> 
    </>
  );
}

export default OurWork;
