import React, { useState } from 'react';
import ColorPicker from '../ColorPicker';
import "./styles.css"
import anime from 'animejs';

function HomePage() {
  const [selectedColor, setSelectedColor] = useState('#ff0000');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    animateCrayons();
  };

  const animateCrayons = () => {
    const crayonElements = document.querySelectorAll('.crayon');
  
    
    anime.set(crayonElements, {
      opacity: 0, 
      translateY: 10, 
    });
  
    const animationConfig = {
      targets: crayonElements,
      opacity: 1,
      translateY: 0, 
      duration: 1000, 
      easing: 'easeOutQuad', 
      delay: anime.stagger(100),
    };
  
   
    anime(animationConfig);
  };
  

  const adjustColor = (color, index) => {
    const rgbColor = hexToRgb(color);
    const step = 10;
    const adjustedColor = `rgb(
      ${Math.min(rgbColor.r + index * step, 255)},
      ${Math.min(rgbColor.g + index * step, 255)},
      ${Math.min(rgbColor.b + index * step, 255)}
    )`;

    return adjustedColor;
  };
  
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  return (
    <div className="homepage-container">
      <h1>Welcome to the Crayon Gallery</h1>

      <div className="crayon-row">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="crayon"
            style={{ backgroundColor: adjustColor(selectedColor, index) }}
          ></div>
        ))}
      </div>
      <div className="color-picker">
        <ColorPicker onColorSelect={handleColorSelect} />
      </div>
    </div>
  );
}

export default HomePage;
