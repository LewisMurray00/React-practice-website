import React from 'react';
import { Link } from 'react-router-dom';
import './SocialCardItem.css'

function SocialCardItem(props) {
  return (
      <>
        <li className="social__cards__item">
            <Link to={props.path} className="social__cards__item__link">
                <figure className="social__cards__item__pic-wrap">
                    <img src={props.src} alt="Socials" className="social__cards__item__img" />
                </figure>
                <div>
                    <h5 className="social__cards__item__text">
                        {props.text}
                    </h5>
                </div>
            </Link>

        </li>
      </>
  )
}

export default SocialCardItem;
