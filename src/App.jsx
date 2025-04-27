import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header'>
        <img src="/images/logowhite.png" className='logo' alt="Soundwave Logo"/>
        
        <input className='input' type="text" placeholder="Search" />
        
        <div className="icon-wrapper">
          <img src="/icons/fav.svg" className='icon' alt="Fav" />
          <img src="/icons/user.svg" className='icon' alt="User" />
          <img src="/icons/cart.svg" className='icon' alt="Cart" />
        </div>
      </header>


        <Banner />

        <section className='cs'>
          <h1>Категории инструментов</h1>
          <p>Ознакомьтесь с нашим широким выбором инструментов, подходящих каждому музыканту.</p>
          <div className="categoriessel">            
            <div className="category-card">
              <img src="/images/guitar.jpg" alt="Guitar" />
              <button className="buy-button">Перейти</button>
            </div>
            <div className="category-card">
              <img src="/images/keyboard.jpg" alt="Keyboard" />
              <button className="buy-button">Перейти</button>
            </div>
            <div className="category-card">
              <img src="/images/drums.jpg" alt="Drums" />
              <button className="buy-button">Перейти</button>
            </div>
          </div>
        </section>



        <section className="popular">
          <div className="popular-header">
            <h1 className="popular-title">Популярные товары</h1>
            <a href="/catalog" className="see-more">
              Ещё →
            </a>
          </div>

          <div className="popular-grid">
            {[
              { img: '/images/guitar.jpg', title: 'Электрогитара', price: '35 000 ₽' },
              { img: '/images/keyboard.jpg', title: 'Клавишный синтезатор', price: '45 000 ₽' },
              { img: '/images/drums.jpg', title: 'Электронные барабаны', price: '60 000 ₽' },
              { img: '/images/microphone.jpg', title: 'Микрофон', price: '15 000 ₽' },
            ].map((item, index) => (
             <div className="popular-card" key={index}>
                <img src={item.img} alt={item.title} className="popular-image" />
              
                <img src="/icons/fav.svg" className="heart-icon" alt="Heart" />
                
                <div className="popular-info">
                  <div className="popular-text">
                    <h2>{item.title}</h2>
                    <p>{item.price}</p>
                  </div>
                  <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
                    +
                  </button>
                </div>
              </div>

            ))}
          </div>
        </section>





        <footer className="footer">
          <p>© 2025 Soundwave. Все права защищены.</p>
        </footer>
    </>
  )
}

export default App
