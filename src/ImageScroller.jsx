import React from 'react';
import './ImageScroller.css'; 

// --- 1. Get image paths from .env ---
const images = [
  import.meta.env.VITE_IMG_1 || 'assets/boy1.jpeg',
  import.meta.env.VITE_IMG_2 || 'assets/boy2.jpeg',
  import.meta.env.VITE_IMG_3 || 'assets/boy3.jpeg',
  import.meta.env.VITE_IMG_4 || 'assets/boy4.jpeg',
].filter(Boolean); // filter(Boolean) removes any empty/undefined entries if you have less than 4

// 2. We duplicate the images to create a seamless, infinite loop
const duplicatedImages = [...images, ...images];

const ImageScroller = () => {
  return (
    <div className="scroller-container">
      <div className="scroller-inner">
        {duplicatedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="birthday memories"
            className="scroller-img"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;