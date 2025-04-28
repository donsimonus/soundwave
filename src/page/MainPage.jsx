import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategorySection from '../components/CategorySection';
import PopularProducts from '../components/PopularProducts';
import Footer from '../components/Footer';
import '../App.css';

function App() {

  const handleAddToCart = (item) => {
    console.log('Добавлено в корзину:', item);
    // Здесь потом сделаешь реальную корзину
  };

  return (
    <>
      <Header />
      <Banner />
      <CategorySection />
      <PopularProducts handleAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;
