import React, { useState, useEffect } from 'react';
import iro from '@jaames/iro';

function ColorPicker() {
  const [color, setColor] = useState('#ff0000'); 

  useEffect(() => {
    const colorPicker = new iro.ColorPicker('#color-picker-container', {
      width: 200,
      color: color, 
    });

    colorPicker.on('input:end', (color) => {
      const hexColor = color.hexString;
      setColor(hexColor);
    });

    return () => {
      colorPicker.off('input:end');
      colorPicker.destroy();
    };
  }, []);

  return (
    <div>
      <div id="color-picker-container"></div>
      <p>Selected Color: {color}</p>
    </div>
  );
}

export default ColorPicker;
