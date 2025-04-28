import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/logowhite.png" className='logo' alt="Soundwave Logo" />
        </div>
        <div className="footer-links">
          <h3>Навигация</h3>
          <ul>
            <li><a href="/index.php">Главная</a></li>
            <li><a href="/catalog.php">Каталог</a></li>
            <li><a href="/about.php">О нас</a></li>
            <li><a href="/contact.php">Контакты</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Контакты</h3>
          <p>Email: support@soundwave.com</p>
          <p>Телефон: +7 (705) 812-34-77</p>
          <p>Адрес: Regeringsgatan 65, 111 56 Stockholm, Швеция</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SoundWave. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
