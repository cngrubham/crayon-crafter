import React, { useState, useEffect } from 'react';
import ColorPicker from '../ColorPicker';
import CrayonComponent from '../Crayon';
import BoxComponent from '../Box';
import { createCrayon, createBox } from '../../../utils/backend';

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

  const handleCreateCrayon = (hexCode, crayonName) => {
    createCrayon({ hexCode, name: crayonName })
      .then((createdCrayon) => {
        setSelectedCrayons([...selectedCrayons, createdCrayon]);
      })
      .catch((error) => console.error('Error creating crayon:', error));
  };
  
  

  const handleCreateBox = () => {
    const boxData = {
      crayons: selectedCrayons,
    };

    createBox(boxData)
      .then((createdBox) => {
      })
      .catch((error) => console.error('Error creating box:', error));
  };

  const handleSaveBox = () => {
    handleCreateBox();
    setSelectedCrayons([]);
    setIsBoxFull(false);
  };

  return (
    <div>
      <h2>Create Your Crayon</h2>
      <ColorPicker onColorSelect={handleColorSelect} />
      <CrayonComponent hexCode={selectedColor} onCreateCrayon={handleCreateCrayon} isBoxFull={isBoxFull} />
      <BoxComponent selectedCrayons={selectedCrayons} onSaveBox={handleSaveBox} isBoxFull={isBoxFull} />
    </div>
  );
};

export default CreatePage;
