import React from 'react'
import {Link} from 'react-router-dom';
import './ReviewCardItem.css'

function ReviewCardItem(props) {
  return (
    <>
      <li className="review__cards__item">
          <Link to={props.path} className="review__cards__item__link">
              <figure className="review__cards__item__pic-wrap" data-category={props.label}>
                  <img src={props.src} alt="Review" className="review__cards__item__img" />
              </figure>
              <div>
                  <h5 className="review__cards__item__text">
                      {props.text}
                  </h5>
              </div>
          </Link>
      </li>
    </>
)
}

export default ReviewCardItem