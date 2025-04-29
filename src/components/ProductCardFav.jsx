import React, { useState } from 'react';
import '../App.css';

const ProductCardFav = ({ product }) => {
  const [hoverHeart, setHoverHeart] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <img
          src={hoverHeart ? "/icons/favactive.svg" : "/icons/fav.svg"}
          alt="heart"
          className="heart-icon"
          onMouseEnter={() => setHoverHeart(true)}
          onMouseLeave={() => setHoverHeart(false)}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button className="add-to-cart">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductCardFav;
