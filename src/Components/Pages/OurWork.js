import React from 'react';
import { KitchenSliderData } from '../AllSliders/KitchenSliderData';
import { DecoratingSliderData } from '../AllSliders/DecoratingSliderData'
import { ExtensionsSliderData } from '../AllSliders/ExtensionsSliderData'
import { BathroomsSliderData } from '../AllSliders/BathroomsSliderData'
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

        <div className="kitchen-container">
          <ImageSlider slides={KitchenSliderData}/>
          <div className="kitchen-text">
            <h1 className="kitchen-title">Kitchens</h1>
          </div>  
        </div>

        <div className="decorating-container">
          <ImageSlider slides={DecoratingSliderData} />
          <div className="decorating-text">
            <h1 className="decorating-title">Decorating</h1>
          </div>
        </div>

        <div className="extension-container">
          <ImageSlider slides={ExtensionsSliderData} />
          <div className="extension-text">
            <h1 className="extension-title">Extensions</h1>
          </div>
        </div>

        <div className="bathroom-container">
          <ImageSlider slides={BathroomsSliderData} />
          <div className="bathroom-text">
            <h1 className="bathroom-title">Bathrooms</h1>
          </div>
        </div>
        <Footer /> 
    </>
  );
}

export default OurWork;
