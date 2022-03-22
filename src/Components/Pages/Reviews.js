import React from 'react';
import Footer from '../Footer/Footer';
import ImageSlider from '../Slider/ImageSlider'
import {ReviewSliderData} from '../AllSliders/ReviewSliderData'
import '../Pages/PagesCss/Reviews.css'

function Reviews() {
  return (
    <>
    <div>
        <h1>Reviews</h1>
    </div>
    <div className="review-container">
          <ImageSlider slides={ReviewSliderData} />
          <div className="review-text">
            <h1 className="review-title">Reviews</h1>
          </div>
        </div>  
    <Footer />
</>
  );
}

export default Reviews;
