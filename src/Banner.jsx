import React, { useState, useEffect } from 'react';

const images = [
  '/images/drumsbanner.jpg',
  '/images/guitarbanner.jpg',
  '/images/pianobanner.jpeg'
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // переключение каждые 4 секунды

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
    </div>
  );
};

export default Banner;
