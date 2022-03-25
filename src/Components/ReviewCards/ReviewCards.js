import React from 'react'
import ReviewCardItem from '../ReviewCardItem/ReviewCardItem';
import './ReviewCards.css'

function ReviewCards() {
  return (
    <div className="reviewCards">
        <div className="review__cards__container">
            <div className="review__cards__wrapper">
                <ul className="review__cards__items">
                    <ReviewCardItem 
                        src="Images/0x0.png"
                        text="Check out a review from one of our customers"
                        label="Review"
                        path='/reviews'
                    />
                    <ReviewCardItem 
                        src="Images/0x0.png"
                        text="Check out a review from one of our customers!"
                        label="Review"
                        path='/reviews'
                    />
                    <ReviewCardItem 
                        src="Images/0x0.png"
                        text="Check out a review from one of our customers!"
                        label="Reviews"
                        path='/reviews'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default ReviewCards