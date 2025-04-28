import React from 'react';
import PopularCard from './PopularCard';
import '../styles/PopularProducts.css';

const PopularProducts = ({ handleAddToCart }) => {
  const popularItems = [
    { img: '/images/guitar.jpg', title: 'Электрогитара', price: '35 000 ₽' },
    { img: '/images/keyboard.jpg', title: 'Клавишный синтезатор', price: '45 000 ₽' },
    { img: '/images/drums.jpg', title: 'Электронные барабаны', price: '60 000 ₽' },
    { img: '/images/microphone.jpg', title: 'Микрофон', price: '15 000 ₽' },
  ];

  return (
    <section className="popular">
      <div className="popular-header">
        <h1 className="popular-title">Популярные товары</h1>
        <a href="/catalog" className="see-more">Ещё →</a>
      </div>
      <div className="popular-grid">
        {popularItems.map((item, index) => (
          <PopularCard key={index} item={item} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
