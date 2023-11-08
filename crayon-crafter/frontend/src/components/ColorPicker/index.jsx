import React, { useState, useEffect, useRef } from 'react';
import iro from '@jaames/iro';
import anime from 'animejs';

function ColorPicker({ onColorSelect, animationTarget }) {
  const [color, setColor] = useState('#ff0000');
  const colorPickerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!colorPickerRef.current) {
      colorPickerRef.current = new iro.ColorPicker('#color-picker-container', {
        width: 200,
        color: color,
      });

      colorPickerRef.current.on('input:end', (newColor) => {
        const hexColor = newColor.hexString;
        setColor(hexColor);
        onColorSelect(hexColor);

        if (animationRef.current) {
          animationRef.current.pause();
        }

      
        animationRef.current = anime({
          targets: animationTarget, 
          backgroundColor: hexColor,
          duration: 1000,
          easing: 'easeOutQuad',
        });
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [color, onColorSelect, animationTarget]);

  return (
    <div>
      <div id="color-picker-container"></div>
      <p>Selected Color: {color}</p>
    </div>
  );
}

export default ColorPicker;
