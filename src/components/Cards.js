import React from 'react';
import Card from './Card';
import './Cards.scss'; // Import the SCSS file

const Cards = () => {
  return (
    <div>
      <p className="related-deals">Related deals you might like for</p>
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
