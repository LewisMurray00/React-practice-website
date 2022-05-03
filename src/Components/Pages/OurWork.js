import React from 'react';

import OurWorkHero from '../OurWorkHero/OurWorkHero';

import ImageSlider from '../Slider/ImageSlider';
import KitchenImageSlider from '../Slider/AllSliders/KitchenImageSlider';
import DecoratingImageSlider from '../Slider/AllSliders/DecoratingImageSlider';
import ExtensionImageSlider from '../Slider/AllSliders/ExtensionImageSlider';
import BathroomsImageSlider from '../Slider/AllSliders/BathroomImageSlider';

import { KitchenSliderData } from '../AllSliders/KitchenSliderData';
import { DecoratingSliderData } from '../AllSliders/DecoratingSliderData'
import { ExtensionsSliderData } from '../AllSliders/ExtensionsSliderData'
import { BathroomsSliderData } from '../AllSliders/BathroomsSliderData'

import Footer from '../Footer/Footer';
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

        <div className="kitchen-container">
          <KitchenImageSlider slides={KitchenSliderData}/>
          <div className="kitchen-text">
            <h1 className="kitchen-title">Kitchens</h1>
          </div>  
        </div>

        <div className="decorating-container">
          <DecoratingImageSlider slides={DecoratingSliderData} />
          <div className="decorating-text">
            <h1 className="decorating-title">Decorating</h1>
          </div>
        </div>

        <div className="extension-container">
          <ExtensionImageSlider slides={ExtensionsSliderData} />
          <div className="extension-text">
            <h1 className="extension-title">Extensions</h1>
          </div>
        </div>

        <div className="bathroom-container">
          <BathroomsImageSlider slides={BathroomsSliderData} />
          <div className="bathroom-text">
            <h1 className="bathroom-title">Bathrooms</h1>
          </div>
        </div>
        <Footer /> 
    </>
  );
}

export default OurWork;
