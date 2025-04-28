import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const products = [
    {
      id: 1,
      name: 'YAMAHA C40M',
      price: 1799.99,
      image: './images/YAMAHA C40M.jpg',
    },
    {
      id: 2,
      name: 'Taylor 214ce Acoustic Guitar',
      price: 1799.99,
      image: '/images/guitar2.jpg',
    },
    {
      id: 3,
      name: 'Taylor 214ce Acoustic Guitar',
      price: 1799.99,
      image: '/images/guitar3.jpg',
    },
    {
      id: 4,
      name: 'Taylor 214ce Acoustic Guitar',
      price: 1799.99,
      image: '/images/guitar4.jpg',
    },
  ];

  return (
    <>
      <Header />

      {/* Каталог товаров */}
      <div className="catalog">
        {/* Сайдбар */}
        <aside className="sidebar">
          <h2>Гитары</h2>
          <button className="reset-button">Сбросить ↻</button>

          <div className="filter-section">
            <h3>Цена</h3>
            <div className="price-range">
              <span>$0</span>
              <span>$30000</span>
            </div>
            <input type="range" min="0" max="30000" />
          </div>

          <div className="filter-section">
            <h3>Бренд</h3>
            <button className="add-brand">+</button>
          </div>

          <div className="filter-section">
            <h3>Наличие</h3>
            <label className="availability">
              <input type="checkbox" /> В наличии
            </label>
          </div>
        </aside>

        {/* Сетка товаров */}
        <main className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button className="add-to-cart">Добавить в корзину</button>
              </div>
            </div>
          ))}
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
