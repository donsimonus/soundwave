import React from 'react';
import '../styles/CategorySection.css';

const CategorySection = () => {
  return (
    <section className='cs'>
      <h1>Категории инструментов</h1>
      <p>Ознакомьтесь с нашим широким выбором инструментов, подходящих каждому музыканту.</p>
      <div className="categoriessel">            
        {[
          { img: '/images/guitar.jpg', alt: 'Guitar' },
          { img: '/images/keyboard.jpg', alt: 'Keyboard' },
          { img: '/images/drums.jpg', alt: 'Drums' },
        ].map((item, index) => (
          <div className="category-card" key={index}>
            <img src={item.img} alt={item.alt} />
            <button className="buy-button">Перейти</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
