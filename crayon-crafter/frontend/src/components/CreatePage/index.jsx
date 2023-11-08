import React, { useState, useEffect } from "react";
import ColorPicker from "../ColorPicker";
import CrayonComponent from "../Crayon";
import BoxComponent from "../Box";
import { createCrayon, createBox } from "../../../utils/backend";

const CreatePage = () => {
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  const [selectedCrayons, setSelectedCrayons] = useState([]);
  const [boxName, setBoxName] = useState("");
  const [isBoxFull, setIsBoxFull] = useState(false);

  useEffect(() => {
    setIsBoxFull(selectedCrayons.length >= 8);
  }, [selectedCrayons]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleCreateCrayon = (hexCode, crayonName) => {
    createCrayon({ hexCode, crayonName: crayonName })
      .then((createdCrayon) => {
        setSelectedCrayons([...selectedCrayons, createdCrayon]);
      })
      .catch((error) => console.error("Error creating crayon:", error));
  };
  const handleEditCrayon = (crayonData) => {
    const updatedCrayons = selectedCrayons.map((crayon) => {
      if (crayon.crayonId === crayonData.crayonId) {
        return {
          ...crayon,
          crayonName: crayonData.crayonName,
        };
      }
      return crayon;
    });
  
    setSelectedCrayons(updatedCrayons); 
  };
  

  const handleDeleteCrayon = (crayonId) => {
    const updatedCrayons = selectedCrayons.filter(
      (crayon) => crayon.id !== crayonId
    );
    setSelectedCrayons(updatedCrayons);
  };

  const handleCreateBox = () => {
    const defaultBoxName = "Unnamed Box";
    const finalBoxName = boxName.trim() || defaultBoxName;
    const boxData = {
      boxName: finalBoxName,
      crayons: selectedCrayons,
    };

    createBox(boxData)
      .then((createdBox) => {
        setBoxName("");
      })
      .catch((error) => console.error("Error creating box:", error));
  };

  const handleSaveBox = () => {
    handleCreateBox();
    setSelectedCrayons([]);
    setIsBoxFull(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl mb-4">Create Your Crayon</h2>
      <ColorPicker onColorSelect={handleColorSelect} />
      <CrayonComponent
        hexCode={selectedColor}
        onCreateCrayon={handleCreateCrayon}
        onDeleteCrayon={handleDeleteCrayon}
        handleDeleteCrayonProp={handleDeleteCrayon}
        handleEditCrayonProp={handleEditCrayon}
        isBoxFull={isBoxFull}
        selectedCrayons={selectedCrayons}
        setSelectedCrayons={setSelectedCrayons}
      />
      <input
        type="text"
        placeholder="Enter Box Name"
        value={boxName}
        onChange={(e) => setBoxName(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <BoxComponent
        selectedCrayons={selectedCrayons}
        onSaveBox={handleSaveBox}
        isBoxFull={isBoxFull}
        boxName={boxName}
        setBoxName={setBoxName}
      />
    </div>
  );
};

export default CreatePage;
