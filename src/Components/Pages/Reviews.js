import React from 'react';
import Footer from '../Footer/Footer';
import ImageSlider from '../Slider/ImageSlider'
import {ReviewSliderData} from '../AllSliders/ReviewSliderData'
import '../Pages/PagesCss/Reviews.css'
import ReviewCards from '../ReviewCards/ReviewCards';

function Reviews() {
  return (
    <>
    <div className="review-title">
        <h1>Reviews</h1>
    </div>
    <div className="review-container">
          <ImageSlider slides={ReviewSliderData} />
    </div>
    <ReviewCards />
    <Footer />
</>
  );
}

export default Reviews;
