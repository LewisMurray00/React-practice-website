import React from 'react';
import './SocialCardItem.css'

function SocialCardItem(props) {
  return (
      <>
        <li className="social__cards__item">
            <a href={props.path} rel="noopener" className="social__cards__item__link">
                <figure className="social__cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Socials" className="social__cards__item__img" />
                </figure>
                <div>
                    <h5 className="social__cards__item__text">
                        {props.text}
                    </h5>
                </div>
            </a>

        </li>
      </>
  )
}

export default SocialCardItem;
