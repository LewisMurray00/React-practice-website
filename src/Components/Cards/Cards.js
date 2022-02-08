import React from 'react';
import CardItem from '../CardItem/CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
        <h1>Check out our work!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="/public/Images/Logo.png"
                        text="Check out our work here!"
                        label="Work"
                        path='/our-work'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;

