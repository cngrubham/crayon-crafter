import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorPicker from "../ColorPicker";
import CrayonComponent from "../Crayon";
import "./styles.css";

import {
  createCrayon,
  createBox,
  deleteCrayon,
  updateCrayon,
} from "../../../utils/backend";

const CreatePage = () => {
  const [selectedColor, setSelectedColor] = useState("#fffff");
  const [selectedCrayons, setSelectedCrayons] = useState([]);
  const [boxName, setBoxName] = useState("");
  const navigate = useNavigate();
  const isBoxFull = selectedCrayons.length >= 8;

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

  const handleEditCrayon = (id, crayonData) => {
    updateCrayon(id, crayonData);
    const updatedCrayons = selectedCrayons.map((crayon) => {
      if (crayon._id === id) {
        return {
          ...crayon,
          crayonName: crayonData.crayonName,
        };
      }
      return crayon;
    });

    setSelectedCrayons(updatedCrayons);
  };

  const handleDeleteCrayon = (id) => {
    console.log("Deleting crayon with id:", id);
    deleteCrayon(id)
      .then(() => {
        const updatedCrayons = selectedCrayons.filter(
          (crayon) => crayon._id !== id
        );
        setSelectedCrayons(updatedCrayons);
      })
      .catch((error) => console.error("Error deleting crayon:", error));
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
    navigate("/boxes");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen create-page">
      <div className="flex flex-col items-center justify-center create-container">
        <h2 className="text-2xl mb-4">Create Your Crayon</h2>
        <ColorPicker onColorSelect={handleColorSelect} />

        <CrayonComponent
          hexCode={selectedColor}
          onCreateCrayon={handleCreateCrayon}
          handleDeleteCrayonProp={handleDeleteCrayon}
          handleEditCrayonProp={handleEditCrayon}
          isBoxFull={isBoxFull}
          selectedCrayons={selectedCrayons}
        />

        <h2 className="text-lg mb-4">Add 8 Crayons to your Box</h2>
        <div className="input-group">
          <label></label>
          <input
            type="text"
            maxLength={20}
            placeholder="Enter Box Name"
            value={boxName}
            onChange={(e) => setBoxName(e.target.value)}
            className="border p-2 rounded mb-4"
          />
        </div>
        {isBoxFull ? (
          <button onClick={handleSaveBox}>Save Box</button>
        ) : (
          <p>Your Box is not full yet.</p>
        )}
      </div>
    </div>
  );
};

export default CreatePage;
