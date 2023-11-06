import React, { useState, useEffect } from 'react';
import ColorPicker from '../ColorPicker';
import CrayonComponent from '../Crayon';
import BoxComponent from './box/index';

const CreatePage = () => {
  const [selectedColor, setSelectedColor] = useState('#ff0000');
  const [selectedCrayons, setSelectedCrayons] = useState([]);
  const [isBoxFull, setIsBoxFull] = useState(false);

  useEffect(() => {
    setIsBoxFull(selectedCrayons.length >= 8);
  }, [selectedCrayons]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleCreateCrayon = (hexCode) => {
    setSelectedCrayons([...selectedCrayons, { hexCode }]);
  };

  const handleSaveBox = () => {
    setSelectedCrayons([]);
    setIsBoxFull(false);
  };

  return (
    <div>
      <h2>Create Your Crayon</h2>
      <ColorPicker onColorSelect={handleColorSelect} />
      <CrayonComponent hexCode={selectedColor} onCreateCrayon={handleCreateCrayon} />
      <BoxComponent selectedCrayons={selectedCrayons} onSaveBox={handleSaveBox} isBoxFull={isBoxFull} />
    </div>
  );
};

export default CreatePage;
