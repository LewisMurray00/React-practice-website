import React from 'react';
import SocialCardItem from '../SocialCardItem/SocialCardItem';
import './SocialCards.css'

function SocialCards() {
  return (
      <div className="socialCards">
        <h1>Get in touch with us!</h1>
        <div className="socialCards__container">
          <div className="socialCards__wrapper">
            <ul className="socialCards__items">
              <SocialCardItem 
                src="Images/instagram.png"
                text="Check out our instagram here!"
                label="Instagram"
                path="/contact-us"
              />
              <SocialCardItem
                src="Images/facebook.png"
                text="Check out our facebook here"
                label="Facebook"
                path="/contact-us"
              />
              <SocialCardItem
                src="Images/messageIcon.png"
                text="Message us: 07XXXXXXXXX"
                label="Message"
                path="/contact-us"
              />
            </ul>
          </div>
        </div>
      </div>
  );
}

export default SocialCards