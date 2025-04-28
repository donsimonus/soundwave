import React from 'react';
import '../styles/PopularCard.css';

const PopularCard = ({ item, handleAddToCart }) => {
  return (
    <div className="popular-card">
      <img src={item.img} alt={item.title} className="popular-image" />
      <img src="/icons/fav.svg" className="heart-icon" alt="Heart" />
      <div className="popular-info">
        <div className="popular-text">
          <h2>{item.title}</h2>
          <p>{item.price}</p>
        </div>
        <button className="add-to-cart" onClick={() => handleAddToCart(item)}>+</button>
      </div>
    </div>
  );
};

export default PopularCard;
