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
      image: './guitar/YAMAHA C40M.jpg',
    },
    {
      id: 2,
      name: 'ARIA MAC-STD Metallic Black',
      price: 1799.99,
      image: './guitar/ARIA MAC-STD Metallic Black.jpg',
    },
    {
      id: 3,
      name: 'ARIA STG-003 White',
      price: 1799.99,
      image: './guitar/ARIA STG-003 White.jpg',
    },
    {
      id: 4,
      name: 'EPIPHONE Les Paul Special E1 Worn Ebony',
      price: 1799.99,
      image: './guitar/EPIPHONE Les Paul Special E1 Worn Ebony.jpg',
    },
    {
      id: 5,
      name: 'EPIPHONE Power Players Les Paul Lava Red',
      price: 1799.99,
      image: './guitar/EPIPHONE Power Players Les Paul Lava Red.jpg',
    },{
      id: 6,
      name: 'Taylor 214ce Acoustic Guitar',
      price: 1799.99,
      image: './guitar/YAMAHA C40M.jpg',
    },{
      id: 7,
      name: 'Taylor 214ce Acoustic Guitar',
      price: 1799.99,
      image: './guitar/YAMAHA C40M.jpg',
    },{
      id: 8,
      name: 'Taylor 214ce Acoustic Guitar',
      price: 1799.99,
      image: './guitar/YAMAHA C40M.jpg',
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
            <h3><i className="fa fa-dollar-sign"></i> Цена</h3>
            <div className="price-range">
              <span>$0</span>
              <span>$30000</span>
            </div>
            <input type="range" min="0" max="30000" />
          </div>

          <div className="filter-section">
            <h3><i className="fa fa-tags"></i> Бренд</h3>
            <button className="add-brand">+</button>
          </div>

          <div className="filter-section">
            <h3><i className="fa fa-check-circle"></i> Наличие</h3>
            <label className="availability">
              <input type="checkbox" /> В наличии
            </label>
          </div>
        </aside>

        {/* Сетка товаров */}
        <main className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <img src="/icons/favblack.svg" alt="heart" className="heart-icon" />
              </div>
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
