import React, { useState, useEffect, useRef } from 'react';
import iro from '@jaames/iro';

function ColorPicker({ onColorSelect }) {
  const [color, setColor] = useState('#ff0000');
  const colorPickerRef = useRef(null);

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
      });
    }

    return () => {
    };
  }, [color, onColorSelect]);

  return (
    <div>
      <div id="color-picker-container"></div>
      <p>Selected Color: {color}</p>
    </div>
  );
}

export default ColorPicker;
