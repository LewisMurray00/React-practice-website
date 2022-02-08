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
                        src="Images/image3.jpeg"
                        text="Check out our landscaping work here!"
                        label="Landscaping"
                        path='/our-work'
                    />
                    <CardItem 
                        src="Images/0x0.png"
                        text="Check out our kitchen work here!"
                        label="Kitchens"
                        path='/our-work'
                    />
                </ul>
                {/* Wrapped a new list with the cards in two create the 2 above and 3 below style */}
                <ul className="cards__items">
                    <CardItem 
                        src="Images/0x0.png"
                        text="Check out our decorating work here!"
                        label="Decorating"
                        path='/our-work'
                    />
                    <CardItem 
                        src="Images/0x0.png"
                        text="Check out our extensions work here!"
                        label="Extensions"
                        path='/our-work'
                    />
                    <CardItem 
                        src="Images/0x0.png"
                        text="Check out our bathroom work here!"
                        label="Bathrooms"
                        path='/our-work'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;

