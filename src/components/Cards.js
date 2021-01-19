import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Visit some of the best beaches on the planet'
              label='Fun'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Take a helicopter ride around the island'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Explore the city'
              label='Explore'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
